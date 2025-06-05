using System;
using System.Collections.Generic;
/// ✅ Clean Code: Kelas ini menerapkan pola desain Singleton dengan jelas
/// Mengelola satu instance data string yang dapat diakses global.

public class PusatDataSingleton
{
    // ✅ Clean Code: Penamaan _instance mengikuti konvensi field private di C#
    private static PusatDataSingleton _instance;

    // ✅ Clean Code: Gunakan properti publik dengan akses terbatas untuk keamanan
    // 🔧 Sebelumnya: field public biasa tanpa encapsulation
    public List<string> DataTersimpan { get; private set; }

    // ✅ Clean Code: Konstruktor private untuk mencegah pembuatan instance ganda
    private PusatDataSingleton()
    {
        // ✅ Clean Code: Inisialisasi langsung di konstruktor
        DataTersimpan = new List<string>();
    }

    /// ✅ Clean Code: Nama method GetInstance lebih deskriptif dan umum digunakan pada Singleton
    /// 🔧 Sebelumnya bernama GetDataSingleton
    
    public static PusatDataSingleton GetInstance()
    {
        if (_instance == null)
        {
            _instance = new PusatDataSingleton();
        }

        return _instance;
    }

    /// ✅ Clean Code: Nama GetAllData menjelaskan tujuan method secara ringkas
    
    public List<string> GetAllData()
    {
        return DataTersimpan;
    }

    /// ✅ Clean Code: PrintAllData menjelaskan tindakan secara jelas
    /// 🔧 Sebelumnya PrintSemuaData
    
    public void PrintAllData()
    {
        if (DataTersimpan.Count == 0)
        {
            Console.WriteLine("Belum ada data.");
            return;
        }

        Console.WriteLine("Data yang tersimpan:");
        foreach (string data in DataTersimpan)
        {
            Console.WriteLine("- " + data);
        }
    }

    /// ✅ Clean Code: Nama AddData lebih konsisten dan ringkas
    /// 🔧 Sebelumnya AddSebuahData
    
    public void AddData(string input)
    {
        DataTersimpan.Add(input);
    }

    /// ✅ Clean Code: RemoveDataAt menjelaskan bahwa kita menghapus data berdasarkan index
    /// 🔧 Sebelumnya HapusSebuahData
    
    public void RemoveDataAt(int index)
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
