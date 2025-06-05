using System;

public class Program
{
    public static void Main()
    {
        // ✅ Clean Code: Penamaan variabel menggunakan camelCase untuk variabel lokal
        // 🔧 Diperbaiki: Pemanggilan GetDataSingleton() → GetInstance()
        PusatDataSingleton data1 = PusatDataSingleton.GetInstance();
        PusatDataSingleton data2 = PusatDataSingleton.GetInstance();

        // ✅ Clean Code: Method AddData lebih ringkas dan sesuai konvensi
        // 🔧 Sebelumnya bernama AddSebuahData (kurang singkat dan eksplisit)
        data1.AddData("Nama 1: Nana");
        data1.AddData("Nama 2: Andi");
        data1.AddData("Asisten Praktikum: Budi");

        // ✅ Clean Code: PrintAllData adalah nama method yang jelas dan sesuai standar PascalCase
        // 🔧 Sebelumnya bernama PrintSemuaData
        Console.WriteLine("\n[Cetak dari data2]");
        data2.PrintAllData();

        // ✅ Clean Code: Gunakan nama method yang menjelaskan tindakan (RemoveDataAt)
        // 🔧 Sebelumnya HapusSebuahData
        data2.RemoveDataAt(2);

        Console.WriteLine("\n[Cetak dari data1 setelah penghapusan]");
        data1.PrintAllData();

        // ✅ Clean Code: Tidak ada duplikasi logika, method GetAllData() digunakan kembali
        Console.WriteLine($"\nJumlah data di data1: {data1.GetAllData().Count}");
        Console.WriteLine($"Jumlah data di data2: {data2.GetAllData().Count}");
    }
}
