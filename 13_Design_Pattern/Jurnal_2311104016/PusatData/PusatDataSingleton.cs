using System;
using System.Collections.Generic;

public class PusatDataSingleton
{
    // Static field untuk menyimpan satu-satunya instance dari class ini
    private static PusatDataSingleton _instance;

    // Atribut data berupa List of string
    public List<string> DataTersimpan;

    // Konstruktor privat untuk mencegah instansiasi dari luar class
    private PusatDataSingleton()
    {
        // Inisialisasi list kosong saat objek pertama kali dibuat
        DataTersimpan = new List<string>();
    }

    // Method static yang digunakan untuk mengakses instance tunggal
    public static PusatDataSingleton GetDataSingleton()
    {
        // Jika instance belum dibuat, buat dulu
        if (_instance == null)
        {
            _instance = new PusatDataSingleton();
        }
        // Kembalikan instance yang sudah dibuat
        return _instance;
    }

    // Method untuk mengambil semua data yang ada dalam list
    public List<string> GetSemuaData()
    {
        return DataTersimpan;
    }

    // Method untuk mencetak semua data satu per satu ke konsol
    public void PrintSemuaData()
    {
        if (DataTersimpan.Count == 0)
        {
            Console.WriteLine("Belum ada data.");
            return;
        }

        Console.WriteLine("Data yang tersimpan:");
        foreach (var data in DataTersimpan)
        {
            Console.WriteLine("- " + data);
        }
    }

    // Method untuk menambahkan data baru ke dalam list
    public void AddSebuahData(string input)
    {
        DataTersimpan.Add(input);
    }

    // Method untuk menghapus data berdasarkan index (posisi dalam list)
    public void HapusSebuahData(int index)
    {
        if (index >= 0 && index < DataTersimpan.Count)
        {
            DataTersimpan.RemoveAt(index);
        }
        else
        {
            Console.WriteLine("Index tidak valid.");
        }
    }
}
