```jsx
import React, { useState } from 'react';

const App = () => {
  const [selectedEntry, setSelectedEntry] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const journalEntries = [
    {
      id: 1,
      title: "Malam yang Tenang",
      date: "12 Oktober 2024",
      content: `Malam ini begitu tenang. Suara jangkrik di luar jendela seolah menjadi musik pengantar tidur yang alami. Aku duduk di kursi kayu tua ini, secangkir teh hangat di sampingku, dan menulis tentang hari-hari yang telah berlalu. Kadang aku bertanya-tanya, apakah waktu benar-benar berjalan atau hanya ilusi yang kita ciptakan untuk memahami perubahan di sekitar kita?

Malam-malam seperti ini selalu mengingatkanku pada masa kecil, ketika ibu masih duduk di beranda sambil merajut. Aku akan duduk di sampingnya, mendengarkan cerita-cerita lama yang penuh hikmah. Waktu terasa lebih lambat, lebih berarti, dan lebih dihargai. Tidak seperti sekarang, di mana kita terburu-buru bahkan untuk hal-hal yang seharusnya dinikmati.

Aku menatap langit malam yang penuh bintang. Setiap titik cahaya itu mewakili kenangan, harapan, dan impian yang pernah kumiliki. Beberapa telah terwujud, beberapa masih dalam proses, dan beberapa mungkin hanya akan tetap sebagai mimpi. Tapi bukankah hidup itu sendiri adalah perjalanan dari satu mimpi ke mimpi lainnya?

Tehku sudah mulai dingin, tapi hatiku terasa hangat. Mungkin inilah makna sebenarnya dari ketenangan - bukan ketiadaan suara atau gerakan, tapi kedamaian batin yang muncul ketika kita bisa hadir sepenuhnya dalam momen ini, tanpa penyesalan masa lalu atau kekhawatiran masa depan.`,
      category: "Refleksi",
      image: "https://images.unsplash.com/photo-1512040639763-5a6336121c27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Perjalanan ke Pegunungan",
      date: "5 Oktober 2024",
      content: `Perjalanan ke pegunungan kemarin meninggalkan kesan yang mendalam. Udara segar, pemandangan hijau yang membentang, dan keheningan yang hanya bisa ditemukan jauh dari hiruk-pikuk kota. Di puncak itu, aku merasa kecil tapi sekaligus terhubung dengan sesuatu yang jauh lebih besar. Alam selalu punya cara untuk mengingatkan kita tentang tempat kita di dunia ini.

Perjalanan dimulai sejak subuh, ketika embun masih membasahi dedaunan dan kabut tipis menyelimuti lembah. Setiap langkah mendaki membuatku semakin menyadari betapa kecilnya aku di hadapan alam yang megah ini. Tapi justru dalam kekecilan itulah aku menemukan kebebasan - bebas dari ekspektasi, bebas dari penilaian, bebas dari semua beban yang biasanya kubawa dalam kehidupan sehari-hari.

Di tengah perjalanan, aku bertemu seorang kakek tua yang sudah puluhan tahun menjadi pemandu gunung. Matanya berbinar ketika bercerita tentang perubahan yang dialami pegunungan ini. "Dulu, air terjun itu lebih deras," katanya sambil menunjuk ke kejauhan. "Tapi yang penting bukan seberapa besar atau indah pemandangannya, melainkan bagaimana ia menyentuh hatimu."

Saat kembali ke kaki gunung, kakiku terasa lelah tapi jiwaku terasa ringan. Aku membawa pulang bukan hanya foto-foto indah, tapi juga pelajaran berharga tentang kesederhanaan, ketekunan, dan keindahan dalam hal-hal yang biasa kita anggap remeh. Pegunungan tidak hanya mengubah pemandangan, tapi juga mengubah perspektif.`,
      category: "Petualangan",
      image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Tentang Cinta yang Hilang",
      date: "28 September 2024",
      content: `Ada yang bilang waktu menyembuhkan segalanya. Tapi malam ini, kenangan itu kembali menghampiri. Senyumnya, suaranya, cara ia memegang tanganku saat hujan turun. Mungkin bukan tentang melupakan, tapi belajar hidup dengan kenangan itu. Seperti lukisan yang retak tapi tetap indah, seperti buku yang usang tapi tetap berharga.

Cinta yang hilang meninggalkan ruang kosong yang anehnya justru membuat kita merasa lebih utuh. Kita belajar bahwa patah hati bukanlah kegagalan, tapi proses alami dalam perjalanan mencintai. Setiap luka meninggalkan bekas, tapi bekas-bekas itu adalah peta yang menunjukkan jalan kita telah melalui, bukan bukti kekalahan.

Aku menemukan surat lama di antara tumpukan buku. Tulisannya sudah agak memudar, tapi setiap kata masih mampu membuat jantungku berdetak lebih kencang. Bukan karena rindu yang tak terobati, tapi karena aku bersyukur pernah merasakan sesuatu yang begitu dalam, begitu tulus, begitu manusiawi. Cinta yang hilang bukan berarti cinta yang sia-sia.

Sekarang, ketika melihat foto-foto lama, aku tidak lagi merasa sakit. Yang ada adalah rasa syukur dan penghargaan. Kita mungkin tidak ditakdirkan untuk bersama selamanya, tapi setiap momen yang kita bagi telah membentuk versi terbaik dari diriku sekarang. Cinta yang hilang bukan akhir dari segalanya, tapi awal dari pemahaman yang lebih dalam tentang arti mencintai dan dicintai.`,
      category: "Perasaan",
      image: "https://images.unsplash.com/photo-1518577897935-45300a9766dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "Kopi dan Buku Lama",
      date: "20 September 2024",
      content: `Ritual pagiku: secangkir kopi hitam tanpa gula dan buku tua yang kubeli di pasar loak. Aroma kopi bercampur dengan aroma kertas usang menciptakan harmoni yang menenangkan. Di halaman-halaman yang sudah menguning itu, aku menemukan kebijaksanaan dari zaman yang berbeda. Kadang aku iri pada mereka yang hidup di masa lalu, di mana waktu berjalan lebih lambat dan orang-orang lebih menghargai momen-momen kecil.

Buku-buku tua ini seperti kapsul waktu yang membawa pesan dari generasi sebelumnya. Setiap coretan di margin, setiap lipatan di sudut halaman, setiap bekas kopi yang tumpah - semuanya bercerita tentang pembaca sebelumnya. Aku membayangkan mereka duduk di meja yang sama, membaca kalimat yang sama, mungkin merasakan hal yang sama. Kita terhubung melalui kata-kata, meski terpisah oleh waktu.

Kopi pagi ini berasal dari biji yang dipetik di lereng gunung jauh di sana. Ada cerita di balik setiap teguk - tentang petani yang bangun sebelum matahari terbit, tentang proses panjang dari biji menjadi bubuk, tentang perjalanan ribuan kilometer untuk sampai di cangkirku. Dalam kesederhanaan ritual ini, aku menemukan keajaiban yang seringkali terlewatkan dalam kesibukan sehari-hari.

Saat matahari mulai naik, menyinari halaman buku yang kubaca, aku merasa bersyukur. Bersyukur untuk hal-hal kecil yang membuat hidup berarti: aroma kopi di pagi hari, suara halaman buku yang dibalik, sinar matahari yang hangat, dan keheningan yang memungkinkan pikiran untuk bernapas. Dalam dunia yang serba cepat, mungkin kita semua butuh ritual kecil seperti ini untuk mengingatkan diri bahwa hidup bukan hanya tentang tujuan, tapi juga tentang perjalanan.`,
      category: "Keseharian",
      image: "https://images.unsplash.com/photo-1501858686513-8f906209eada?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      title: "Surat untuk Diriku di Masa Depan",
      date: "10 September 2024",
      content: `Hai, aku yang di masa depan. Apakah kau masih ingat mimpi-mimpi kecilmu? Apakah kau masih menulis di malam hari saat dunia terlelap? Jangan lupa untuk tetap mencintai hal-hal sederhana: aroma hujan, suara daun bergesekan, rasa cokelat panas di hari dingin. Jangan biarkan dunia membuatmu lupa siapa dirimu yang sesungguhnya.

Aku ingin kau tahu bahwa aku bangga padamu, apa pun yang telah kau capai atau belum capai. Kesuksesan bukan hanya tentang pencapaian materi atau pengakuan orang lain, tapi tentang tetap setia pada nilai-nilai yang kau pegang, tentang terus belajar dan tumbuh, tentang tetap manusiawi di tengah tekanan dunia yang semakin tidak manusiawi.

Jika kau merasa lelah, istirahatlah. Jika kau merasa gagal, ingatlah bahwa setiap kegagalan adalah batu loncatan menuju pemahaman yang lebih dalam. Jika kau merasa sendiri, bacalah surat ini lagi - aku di masa lalu selalu ada untukmu, percaya padamu, dan mencintaimu tanpa syarat.

Jangan lupa untuk tertawa, untuk menangis, untuk merasa, untuk hidup sepenuhnya. Dunia mungkin memintamu untuk menjadi sempurna, tapi aku memintamu untuk menjadi autentik. Teruslah menulis, teruslah bermimpi, teruslah mencintai. Dan yang paling penting, jangan pernah berhenti menjadi dirimu sendiri - versi terbaik dari dirimu yang terus berkembang.`,
      category: "Surat",
      image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      title: "Tentang Saya",
      date: "1 Januari 2024",
      content: `Halo, aku Man Surahmo - seorang penulis, pemimpi, dan pencinta kopi. Lahir dan besar di kota kecil yang dikelilingi pegunungan, aku tumbuh dengan kecintaan pada buku dan alam. Sejak kecil, aku selalu membawa buku ke mana pun aku pergi, dan menulis di buku harian menjadi ritual harian yang tak tergantikan.

Perjalanan menulisku dimulai dari puisi-puisi cinta remaja yang penuh drama, lalu berkembang menjadi cerita pendek tentang kehidupan sehari-hari, dan sekarang menjadi refleksi-refleksi pribadi tentang kehidupan, cinta, dan makna keberadaan. Aku percaya bahwa setiap orang punya cerita yang layak diceritakan, dan menulis adalah cara terbaik untuk mengabadikan cerita-cerita itu.

Di luar menulis, aku menikmati hiking di pegunungan, mengunjungi kafe-kafe kecil dengan buku-buku menarik, dan berbincang panjang tentang filsafat hidup dengan teman-teman dekat. Aku juga seorang kolektor buku tua dan cangkir kopi antik - setiap benda memiliki ceritanya sendiri yang menarik untuk dijelajahi.

Website ini adalah ruang pribadiku untuk berbagi pikiran, perasaan, dan pengalaman. Aku berharap tulisan-tulisanku bisa menjadi teman bagi mereka yang sedang mencari, merenung, atau sekadar ingin menemukan kenyamanan dalam kata-kata. Terima kasih telah mampir dan membaca tulisanku. Mari terus belajar, tumbuh, dan menikmati perjalanan hidup ini bersama.`,
      category: "Profil",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 7,
      title: "Kontak",
      date: "1 Januari 2024",
      content: `Terima kasih telah mengunjungi jurnal pribadiku. Jika kamu ingin berbagi pikiran, memberikan masukan, atau sekadar ingin mengobrol, aku akan dengan senang hati mendengarkan. Menulis adalah cara untuk berkomunikasi, dan komunikasi yang baik selalu melibatkan dua arah.

Untuk pertanyaan profesional atau kolaborasi, kamu bisa menghubungiku melalui email di mansurahmo@penulis.com. Aku biasanya merespons dalam 1-3 hari kerja. Untuk obrolan santai atau diskusi tentang buku, kopi, atau kehidupan, silakan sapa aku di media sosial. Aku paling aktif di Twitter, di mana aku sering membagikan kutipan favorit dan pemikiran spontan.

Jika kamu tinggal di kota yang sama, aku akan senang jika kita bisa bertemu untuk minum kopi bersama. Tidak ada yang lebih berharga daripada percakapan tatap muka yang tulus. Siapa tahu, mungkin obrolan kita akan menginspirasi tulisan berikutnya!

Terakhir, jika kamu merasa terbantu atau terinspirasi oleh tulisan-tulisanku, pertimbangkan untuk mendukungku dengan membeli buku terbaruku atau sekadar mentraktirku secangkir kopi. Setiap dukungan, sekecil apa pun, sangat berarti dan membantuku untuk terus menulis dan berbagi. Terima kasih telah menjadi bagian dari perjalanan ini!`,
      category: "Kontak",
      image: "https://images.unsplash.com/photo-1589729138371-7f54926852d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const author = {
    name: "Man Surahmo",
    bio: "Penyuka tulisan dan kopi",
    profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&q=80"
  };

  const navItems = [
    { name: "Beranda", action: () => setSelectedEntry(null) },
    { name: "Tentang Saya", action: () => setSelectedEntry(journalEntries.find(entry => entry.title === "Tentang Saya")) },
    { name: "Jurnal", action: () => setSelectedEntry(null) },
    { name: "Kontak", action: () => setSelectedEntry(journalEntries.find(entry => entry.title === "Kontak")) }
  ];

  return (
    <div className="min-h-screen bg-amber-50" style={{ fontFamily: 'Montserrat, sans-serif' }}>
      {/* Header */}
      <header className="bg-amber-900 text-amber-50 py-4 px-6 shadow-lg">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
            {/* Author Profile Section - Clickable to go home */}
            <div 
              className="flex items-center mb-4 lg:mb-0 cursor-pointer"
              onClick={() => setSelectedEntry(null)}
            >
              <img 
                src={author.profileImage} 
                alt={author.name}
                className="w-12 h-12 rounded-full border-2 border-amber-300 mr-3 object-cover"
              />
              <div>
                <h1 className="text-xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>{author.name}</h1>
                <p className="text-amber-200 text-xs" style={{ fontFamily: 'Montserrat, sans-serif' }}>{author.bio}</p>
                <div className="flex mt-1 space-x-2">
                  <a href="#" className="text-amber-200 hover:text-amber-50 transition-colors duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-amber-200 hover:text-amber-50 transition-colors duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-amber-200 hover:text-amber-50 transition-colors duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Navigation Menu */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-amber-200 hover:text-amber-50 focus:outline-none"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>

            <nav className={`${isMenuOpen ? 'block' : 'hidden'} lg:block mt-4 lg:mt-0`}>
              <ul className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-6">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <button
                      onClick={item.action}
                      className="text-amber-200 hover:text-amber-50 transition-colors duration-200 py-1 px-2 rounded hover:bg-amber-800 block text-sm w-full text-left lg:w-auto lg:text-center"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Main Content */}
        {selectedEntry ? (
          // Single Post View
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src={selectedEntry.image} 
              alt={selectedEntry.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-8">
              <div className="flex items-center text-amber-700 mb-4">
                <span className="mr-4 text-sm" style={{ fontFamily: 'Montserrat, sans-serif' }}>{selectedEntry.date}</span>
                <span className="px-3 py-1 bg-amber-200 text-amber-800 text-xs rounded-full" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {selectedEntry.category}
                </span>
              </div>
              <h1 className="text-3xl font-bold mb-6 text-amber-900" style={{ fontFamily: 'Montserrat, sans-serif' }}>{selectedEntry.title}</h1>
              <div className="text-amber-900 leading-relaxed text-lg" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {selectedEntry.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-6">
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-amber-200">
                <button
                  onClick={() => setSelectedEntry(null)}
                  className="text-amber-700 hover:text-amber-900 font-medium transition-colors duration-200 flex items-center"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  ← Kembali ke Daftar
                </button>
              </div>
            </div>
          </div>
        )       id: 3,
      title: "Tentang Cinta yang Hilang",
      date: "28 September 2024",
      content: `Ada yang bilang waktu menyembuhkan segalanya. Tapi malam ini, kenangan itu kembali menghampiri. Senyumnya, suaranya, cara ia memegang tanganku saat hujan turun. Mungkin bukan tentang melupakan, tapi belajar hidup dengan kenangan itu. Seperti lukisan yang retak tapi tetap indah, seperti buku yang usang tapi tetap berharga.

Cinta yang hilang meninggalkan ruang kosong yang anehnya justru membuat kita merasa lebih utuh. Kita belajar bahwa patah hati bukanlah kegagalan, tapi proses alami dalam perjalanan mencintai. Setiap luka meninggalkan bekas, tapi bekas-bekas itu adalah peta yang menunjukkan jalan kita telah melalui, bukan bukti kekalahan.

Aku menemukan surat lama di antara tumpukan buku. Tulisannya sudah agak memudar, tapi setiap kata masih mampu membuat jantungku berdetak lebih kencang. Bukan karena rindu yang tak terobati, tapi karena aku bersyukur pernah merasakan sesuatu yang begitu dalam, begitu tulus, begitu manusiawi. Cinta yang hilang bukan berarti cinta yang sia-sia.

Sekarang, ketika melihat foto-foto lama, aku tidak lagi merasa sakit. Yang ada adalah rasa syukur dan penghargaan. Kita mungkin tidak ditakdirkan untuk bersama selamanya, tapi setiap momen yang kita bagi telah membentuk versi terbaik dari diriku sekarang. Cinta yang hilang bukan akhir dari segalanya, tapi awal dari pemahaman yang lebih dalam tentang arti mencintai dan dicintai.`,
      category: "Perasaan",
      image: "https://images.unsplash.com/photo-1518577897935-45300a9766dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "Kopi dan Buku Lama",
      date: "20 September 2024",
      content: `Ritual pagiku: secangkir kopi hitam tanpa gula dan buku tua yang kubeli di pasar loak. Aroma kopi bercampur dengan aroma kertas usang menciptakan harmoni yang menenangkan. Di halaman-halaman yang sudah menguning itu, aku menemukan kebijaksanaan dari zaman yang berbeda. Kadang aku iri pada mereka yang hidup di masa lalu, di mana waktu berjalan lebih lambat dan orang-orang lebih menghargai momen-momen kecil.

Buku-buku tua ini seperti kapsul waktu yang membawa pesan dari generasi sebelumnya. Setiap coretan di margin, setiap lipatan di sudut halaman, setiap bekas kopi yang tumpah - semuanya bercerita tentang pembaca sebelumnya. Aku membayangkan mereka duduk di meja yang sama, membaca kalimat yang sama, mungkin merasakan hal yang sama. Kita terhubung melalui kata-kata, meski terpisah oleh waktu.

Kopi pagi ini berasal dari biji yang dipetik di lereng gunung jauh di sana. Ada cerita di balik setiap teguk - tentang petani yang bangun sebelum matahari terbit, tentang proses panjang dari biji menjadi bubuk, tentang perjalanan ribuan kilometer untuk sampai di cangkirku. Dalam kesederhanaan ritual ini, aku menemukan keajaiban yang seringkali terlewatkan dalam kesibukan sehari-hari.

Saat matahari mulai naik, menyinari halaman buku yang kubaca, aku merasa bersyukur. Bersyukur untuk hal-hal kecil yang membuat hidup berarti: aroma kopi di pagi hari, suara halaman buku yang dibalik, sinar matahari yang hangat, dan keheningan yang memungkinkan pikiran untuk bernapas. Dalam dunia yang serba cepat, mungkin kita semua butuh ritual kecil seperti ini untuk mengingatkan diri bahwa hidup bukan hanya tentang tujuan, tapi juga tentang perjalanan.`,
      category: "Keseharian",
      image: "https://images.unsplash.com/photo-1501858686513-8f906209eada?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      title: "Surat untuk Diriku di Masa Depan",
      date: "10 September 2024",
      content: `Hai, aku yang di masa depan. Apakah kau masih ingat mimpi-mimpi kecilmu? Apakah kau masih menulis di malam hari saat dunia terlelap? Jangan lupa untuk tetap mencintai hal-hal sederhana: aroma hujan, suara daun bergesekan, rasa cokelat panas di hari dingin. Jangan biarkan dunia membuatmu lupa siapa dirimu yang sesungguhnya.

Aku ingin kau tahu bahwa aku bangga padamu, apa pun yang telah kau capai atau belum capai. Kesuksesan bukan hanya tentang pencapaian materi atau pengakuan orang lain, tapi tentang tetap setia pada nilai-nilai yang kau pegang, tentang terus belajar dan tumbuh, tentang tetap manusiawi di tengah tekanan dunia yang semakin tidak manusiawi.

Jika kau merasa lelah, istirahatlah. Jika kau merasa gagal, ingatlah bahwa setiap kegagalan adalah batu loncatan menuju pemahaman yang lebih dalam. Jika kau merasa sendiri, bacalah surat ini lagi - aku di masa lalu selalu ada untukmu, percaya padamu, dan mencintaimu tanpa syarat.

Jangan lupa untuk tertawa, untuk menangis, untuk merasa, untuk hidup sepenuhnya. Dunia mungkin memintamu untuk menjadi sempurna, tapi aku memintamu untuk menjadi autentik. Teruslah menulis, teruslah bermimpi, teruslah mencintai. Dan yang paling penting, jangan pernah berhenti menjadi dirimu sendiri - versi terbaik dari dirimu yang terus berkembang.`,
      category: "Surat",
      image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      title: "Tentang Saya",
      date: "1 Januari 2024",
      content: `Halo, aku Man Surahmo - seorang penulis, pemimpi, dan pencinta kopi. Lahir dan besar di kota kecil yang dikelilingi pegunungan, aku tumbuh dengan kecintaan pada buku dan alam. Sejak kecil, aku selalu membawa buku ke mana pun aku pergi, dan menulis di buku harian menjadi ritual harian yang tak tergantikan.

Perjalanan menulisku dimulai dari puisi-puisi cinta remaja yang penuh drama, lalu berkembang menjadi cerita pendek tentang kehidupan sehari-hari, dan sekarang menjadi refleksi-refleksi pribadi tentang kehidupan, cinta, dan makna keberadaan. Aku percaya bahwa setiap orang punya cerita yang layak diceritakan, dan menulis adalah cara terbaik untuk mengabadikan cerita-cerita itu.

Di luar menulis, aku menikmati hiking di pegunungan, mengunjungi kafe-kafe kecil dengan buku-buku menarik, dan berbincang panjang tentang filsafat hidup dengan teman-teman dekat. Aku juga seorang kolektor buku tua dan cangkir kopi antik - setiap benda memiliki ceritanya sendiri yang menarik untuk dijelajahi.

Website ini adalah ruang pribadiku untuk berbagi pikiran, perasaan, dan pengalaman. Aku berharap tulisan-tulisanku bisa menjadi teman bagi mereka yang sedang mencari, merenung, atau sekadar ingin menemukan kenyamanan dalam kata-kata. Terima kasih telah mampir dan membaca tulisanku. Mari terus belajar, tumbuh, dan menikmati perjalanan hidup ini bersama.`,
      category: "Profil",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 7,
      title: "Kontak",
      date: "1 Januari 2024",
      content: `Terima kasih telah mengunjungi jurnal pribadiku. Jika kamu ingin berbagi pikiran, memberikan masukan, atau sekadar ingin mengobrol, aku akan dengan senang hati mendengarkan. Menulis adalah cara untuk berkomunikasi, dan komunikasi yang baik selalu melibatkan dua arah.

Untuk pertanyaan profesional atau kolaborasi, kamu bisa menghubungiku melalui email di mansurahmo@penulis.com. Aku biasanya merespons dalam 1-3 hari kerja. Untuk obrolan santai atau diskusi tentang buku, kopi, atau kehidupan, silakan sapa aku di media sosial. Aku paling aktif di Twitter, di mana aku sering membagikan kutipan favorit dan pemikiran spontan.

Jika kamu tinggal di kota yang sama, aku akan senang jika kita bisa bertemu untuk minum kopi bersama. Tidak ada yang lebih berharga daripada percakapan tatap muka yang tulus. Siapa tahu, mungkin obrolan kita akan menginspirasi tulisan berikutnya!

Terakhir, jika kamu merasa terbantu atau terinspirasi oleh tulisan-tulisanku, pertimbangkan untuk mendukungku dengan membeli buku terbaruku atau sekadar mentraktirku secangkir kopi. Setiap dukungan, sekecil apa pun, sangat berarti dan membantuku untuk terus menulis dan berbagi. Terima kasih telah menjadi bagian dari perjalanan ini!`,
      category: "Kontak",
      image: "https://images.unsplash.com/photo-1589729138371-7f54926852d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const author = {
    name: "Man Surahmo",
    bio: "Penyuka tulisan dan kopi",
    profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&q=80"
  };

  const navItems = [
    { name: "Beranda", action: () => setSelectedEntry(null) },
    { name: "Tentang Saya", action: () => setSelectedEntry(journalEntries.find(entry => entry.title === "Tentang Saya")) },
    { name: "Jurnal", action: () => setSelectedEntry(null) },
    { name: "Kontak", action: () => setSelectedEntry(journalEntries.find(entry => entry.title === "Kontak")) }
  ];

  return (
    <div className="min-h-screen bg-amber-50" style={{ fontFamily: 'Montserrat, sans-serif' }}>
      {/* Header */}
      <header className="bg-amber-900 text-amber-50 py-4 px-6 shadow-lg">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
            {/* Author Profile Section - Clickable to go home */}
            <div 
              className="flex items-center mb-4 lg:mb-0 cursor-pointer"
              onClick={() => setSelectedEntry(null)}
            >
              <img 
                src={author.profileImage} 
                alt={author.name}
                className="w-12 h-12 rounded-full border-2 border-amber-300 mr-3 object-cover"
              />
              <div>
                <h1 className="text-xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>{author.name}</h1>
                <p className="text-amber-200 text-xs" style={{ fontFamily: 'Montserrat, sans-serif' }}>{author.bio}</p>
                <div className="flex mt-1 space-x-2">
                  <a href="#" className="text-amber-200 hover:text-amber-50 transition-colors duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-amber-200 hover:text-amber-50 transition-colors duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-amber-200 hover:text-amber-50 transition-colors duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Navigation Menu */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-amber-200 hover:text-amber-50 focus:outline-none"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>

            <nav className={`${isMenuOpen ? 'block' : 'hidden'} lg:block mt-4 lg:mt-0`}>
              <ul className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-6">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <button
                      onClick={item.action}
                      className="text-amber-200 hover:text-amber-50 transition-colors duration-200 py-1 px-2 rounded hover:bg-amber-800 block text-sm w-full text-left lg:w-auto lg:text-center"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Main Content */}
        {selectedEntry ? (
          // Single Post View
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src={selectedEntry.image} 
              alt={selectedEntry.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-8">
              <div className="flex items-center text-amber-700 mb-4">
                <span className="mr-4 text-sm" style={{ fontFamily: 'Montserrat, sans-serif' }}>{selectedEntry.date}</span>
                <span className="px-3 py-1 bg-amber-200 text-amber-800 text-xs rounded-full" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {selectedEntry.category}
                </span>
              </div>
              <h1 className="text-3xl font-bold mb-6 text-amber-900" style={{ fontFamily: 'Montserrat, sans-serif' }}>{selectedEntry.title}</h1>
              <div className="text-amber-900 leading-relaxed text-lg" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {selectedEntry.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-6">
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-amber-200">
                <button
                  onClick={() => setSelectedEntry(null)}
                  className="text-amber-700 hover:text-amber-900 font-medium transition-colors duration-200 flex items-center"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  ← Kembali ke Daftar
                </button>
              </div>
            </div>
          </div>
        ) : (
          // Journal List View
          <div>
            <h2 className="text-2xl font-bold mb-6 text-amber-900 border-b-2 border-amber-300 pb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>Daftar Tulisan</h2>
            <div className="space-y-4">
              {journalEntries.filter(entry => entry.title !== "Tentang Saya" && entry.title !== "Kontak").map((entry) => (
                <div
                  key={entry.id}
                  onClick={() => setSelectedEntry(entry)}
                  className={`p-4 border-l-4 cursor-pointer transition-all duration-300 hover:shadow-md ${
                    selectedEntry?.id === entry.id
                      ? 'border-amber-600 bg-amber-100'
                      : 'border-amber-300 bg-white hover:border-amber-500'
                  }`}
                >
                  <h3 className="font-bold text-amber-900 mb-1 text-lg md:text-xl lg:text-2xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>{entry.title}</h3>
                  <p className="text-sm text-amber-700" style={{ fontFamily: 'Montserrat, sans-serif' }}>{entry.date}</p>
                  <span className="inline-block px-2 py-1 mt-2 text-xs bg-amber-200 text-amber-800 rounded" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {entry.category}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Footer */}
        <footer className="mt-12 pt-6 border-t border-amber-300 text-center text-amber-700">
          <p className="italic text-sm" style={{ fontFamily: 'Montserrat, sans-serif' }}>"Menulis adalah cara untuk berbicara tanpa diganggu." — Jules Renard</p>
          <p className="mt-2 text-xs" style={{ fontFamily: 'Montserrat, sans-serif' }}>© {new Date().getFullYear()} Journal Pribadi. Hak Cipta Dilindungi.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
```
   
