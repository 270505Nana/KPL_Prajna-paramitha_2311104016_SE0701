# Kelas Target memiliki method yang umum digunakan oleh client.
class Target:
    """
    Target: Interface standar yang digunakan oleh client.
    """

    def request(self) -> str:
        # Method yang dimengerti oleh client
        return "Target: The default target's behavior."


# Kelas Adaptee punya method yang berguna, tapi tidak sesuai dengan yang client harapkan.
class Adaptee:
    """
    Adaptee: Memiliki fungsi yang berguna, tapi interfacenya tidak cocok dengan kebutuhan client.
    """

    def specific_request(self) -> str:
        # Mengembalikan string dalam format yang aneh (dibalik).
        return ".eetpadA eht fo roivaheb laicepS"


# Adapter menjembatani antara Adaptee dan Target, supaya Adaptee bisa digunakan oleh client.
class Adapter(Target, Adaptee):
    """
    Adapter: Menyesuaikan interface Adaptee agar cocok dengan Target, sehingga bisa digunakan oleh client.
    """

    def request(self) -> str:
        # Adapter memanggil method Adaptee lalu membalik hasilnya agar jadi format yang dimengerti client.
        return f"Adapter: (TRANSLATED) {self.specific_request()[::-1]}"


# Fungsi client_code menerima object yang mengikuti interface Target
def client_code(target: "Target") -> None:
    """
    client_code: Fungsi client yang hanya tahu cara kerja Target (tidak tahu Adaptee).
    """

    # Menjalankan method request dari object Target (atau yang menyesuaikan interface-nya)
    print(target.request(), end="")


# Program utama dimulai dari sini
if __name__ == "__main__":
    # Client menggunakan object Target seperti biasa
    print("Client: I can work just fine with the Target objects:")
    target = Target()
    client_code(target)
    print("\n")

    # Client mencoba menggunakan Adaptee secara langsung
    adaptee = Adaptee()
    print("Client: The Adaptee class has a weird interface. "
          "See, I don't understand it:")
    # Hasil dari Adaptee tidak sesuai format yang client pahami
    print(f"Adaptee: {adaptee.specific_request()}", end="\n\n")

    # Client menggunakan Adapter agar bisa bekerja dengan Adaptee
    print("Client: But I can work with it via the Adapter:")
    adapter = Adapter()
    client_code(adapter)
