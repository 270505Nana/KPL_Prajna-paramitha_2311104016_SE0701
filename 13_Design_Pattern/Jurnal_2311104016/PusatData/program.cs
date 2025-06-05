using System;

public class Program
{
    public static void Main()
    {
        // Buat dua objek, tapi sebenarnya keduanya mengacu pada instance yang sama
        PusatDataSingleton data1 = PusatDataSingleton.GetDataSingleton();
        PusatDataSingleton data2 = PusatDataSingleton.GetDataSingleton();

        // Menambahkan data menggunakan data1
        data1.AddSebuahData("Nama 1: Nana");
        data1.AddSebuahData("Nama 2: Andi");
        data1.AddSebuahData("Asisten Praktikum: Budi");

        // Menampilkan semua data dari data2 (akan sama dengan data1 karena Singleton)
        Console.WriteLine("\n[Cetak dari data2]");
        data2.PrintSemuaData();

        // Menghapus data asisten (index ke-2, yaitu "Budi") dari data2
        data2.HapusSebuahData(2);

        // Menampilkan data kembali dari data1 (Budi sudah tidak ada)
        Console.WriteLine("\n[Cetak dari data1 setelah penghapusan]");
        data1.PrintSemuaData();

        // Menampilkan jumlah data dari kedua objek
        Console.WriteLine($"\nJumlah data di data1: {data1.GetSemuaData().Count}");
        Console.WriteLine($"Jumlah data di data2: {data2.GetSemuaData().Count}");
    }
}
