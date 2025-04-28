const readline = require('readline');
const BankTransferConfig = require('./BankTransferConfig');

// Membuat instance konfigurasi
const bankConfig = new BankTransferConfig();

// Membuat antarmuka input/output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Menampilkan pesan berdasarkan bahasa
const askTransferAmount = () => {
    const transferPrompt = bankConfig.getMessage('lang') === 'en'
        ? "Please insert the amount of money to transfer:"
        : "Masukkan jumlah uang yang akan di-transfer:";

    rl.question(transferPrompt, (amountInput) => {
        const transferAmount = parseFloat(amountInput);

        // Menentukan biaya transfer berdasarkan jumlah uang
        const threshold = bankConfig.configData.transfer.threshold;
        const lowFee = bankConfig.configData.transfer.low_fee;
        const highFee = bankConfig.configData.transfer.high_fee;

        let transferFee = (transferAmount <= threshold) ? lowFee : highFee;
        let totalAmount = transferAmount + transferFee;

        // Menampilkan biaya transfer dan total biaya
        const feeMessage = bankConfig.getMessage('lang') === 'en'
            ? `Transfer fee = ${transferFee}`
            : `Biaya transfer = ${transferFee}`;
        
        const totalMessage = bankConfig.getMessage('lang') === 'en'
            ? `Total amount = ${totalAmount}`
            : `Total biaya = ${totalAmount}`;

        console.log(feeMessage);
        console.log(totalMessage);

        askTransferMethod();
    });
};

const askTransferMethod = () => {
    // Menampilkan pesan untuk memilih metode transfer
    const methodPrompt = bankConfig.getMessage('lang') === 'en'
        ? "Select transfer method:"
        : "Pilih metode transfer:";

    console.log(methodPrompt);
    
    // Menampilkan daftar metode transfer
    bankConfig.configData.methods.forEach((method, index) => {
        console.log(`${index + 1}. ${method}`);
    });

    rl.question("Select a method (1-4): ", (methodIndex) => {
        const selectedMethod = bankConfig.configData.methods[parseInt(methodIndex) - 1];
        console.log(`You selected: ${selectedMethod}`);
        askConfirmation();
    });
};

const askConfirmation = () => {
    // Menanyakan konfirmasi berdasarkan bahasa
    const confirmPrompt = bankConfig.getMessage('lang') === 'en'
        ? `Please type "${bankConfig.configData.confirmation.en}" to confirm the transaction:`
        : `Ketik "${bankConfig.configData.confirmation.id}" untuk mengkonfirmasi transaksi:`;

    rl.question(confirmPrompt, (confirmationInput) => {
        const correctConfirmation = bankConfig.getMessage('lang') === 'en'
            ? bankConfig.configData.confirmation.en
            : bankConfig.configData.confirmation.id;

        if (confirmationInput === correctConfirmation) {
            console.log(bankConfig.getMessage('lang') === 'en' ? "The transfer is completed" : "Proses transfer berhasil");
        } else {
            console.log(bankConfig.getMessage('lang') === 'en' ? "Transfer is cancelled" : "Transfer dibatalkan");
        }

        rl.close();
    });
};

// Menjalankan alur aplikasi
askTransferAmount();
