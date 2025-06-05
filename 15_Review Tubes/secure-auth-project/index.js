const fs = require('fs');
const readline = require('readline');
const bcrypt = require('bcrypt');

const usersFile = './users.json';

// Pastikan file users.json ada
if (!fs.existsSync(usersFile)) {
  fs.writeFileSync(usersFile, JSON.stringify([]));
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Load users
const users = JSON.parse(fs.readFileSync(usersFile));

// Validasi username dan password
function isValidInput(username, password) {
  const usernameRegex = /^[A-Za-z0-9]{3,20}$/;
  const passwordLengthValid = password.length >= 8 && password.length <= 20;
  const passwordHasNumber = /\d/.test(password);
  const passwordHasSpecial = /[!@#$%^&*]/.test(password);
  const passwordNoUsername = !password.toLowerCase().includes(username.toLowerCase());

  return (
    usernameRegex.test(username) &&
    passwordLengthValid &&
    passwordHasNumber &&
    passwordHasSpecial &&
    passwordNoUsername
  );
}

// Simpan ke file
function saveUsers() {
  fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));
}

// Register
async function register() {
  rl.question('Masukkan username: ', (username) => {
    rl.question('Masukkan password: ', async (password) => {
      if (!isValidInput(username, password)) {
        console.log('\nInput tidak valid. Pastikan:\n- Username 3-20 karakter alfanumerik\n- Password 8-20 karakter\n- Mengandung angka dan karakter spesial\n- Tidak mengandung username\n');
        rl.close();
        return;
      }

      if (users.find(u => u.username === username)) {
        console.log('Username sudah digunakan.');
        rl.close();
        return;
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      users.push({ username, password: hashedPassword });
      saveUsers();
      console.log('Registrasi berhasil.');
      rl.close();
    });
  });
}

// Login
function login() {
  rl.question('Masukkan username: ', (username) => {
    rl.question('Masukkan password: ', async (password) => {
      const user = users.find(u => u.username === username);
      if (!user) {
        console.log('Username tidak ditemukan.');
        rl.close();
        return;
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        console.log('Login berhasil.');
      } else {
        console.log('Password salah.');
      }
      rl.close();
    });
  });
}

// Jalankan sesuai argumen
const action = process.argv[2];
if (action === 'register') {
  register();
} else if (action === 'login') {
  login();
} else {
  console.log('Gunakan: node index.js register atau node index.js login');
  rl.close();
}
