$(document).ready(function() {
    //alert(0)
    $('.orang').click(function () {
        //alert(3)
        let penyebut = $(this).text();
       // alert(isi);
       let hasil = prompt('Ganti Nama?',penyebut);
       if (!hasil)return; {
        //alert(hasil)
        $(this).text(hasil);
        
       }
        
    })
    $('.tempe').click(function () {
        //alert(3)
        let penyebut = $(this).text();
       // alert(isi);
       let hasil = prompt('Ganti Nim?',penyebut);
       if (!hasil)return; {
        //alert(hasil)
        $(this).text(hasil);
        
       }
        
    })
    $('.minions').click(function () {
        //alert(3)
        let penyebut = $(this).text();
       // alert(isi);
       let hasil = prompt('Ganti Alamat?',penyebut);
       if (!hasil)return; {
        //alert(hasil)
        $(this).text(hasil);
        
       }
        
    })
    $('.delete').click(function () {
      // alert(1)
      let serius = confirm('yakin mau menghapus kenangan?'); 
      if(!serius)return;
      let id = $(this).prop('id');
      //alert(id);
     
      let rid = id.split('__');
      let baris_ke =rid[1];
      //alert(baris__ke)
      $('#dora__'+baris_ke).slideUp()

    })

    
})