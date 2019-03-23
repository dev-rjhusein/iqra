# iqra ☪️ اقرأ
Quran REST API

Asalamu Alaikum! | السَّلَامُ عَلَيْكُمْ

I am creating a REST API using Java and Spring that serves Surahs from the Quran. I would like some feedback and error reports, if you have the time!

The current endpoints are:
<h4>http://<span></span>iqra.sytes.net:5555/{language}/surah?{type}={surah_name}</h4>

[language] can be 'en' for english or 'ar' for arabic.

[type] can by 'fuzzy' for a fuzzy search (approximation) or 'exact' for an exact entry.<h3>See below for EXACT surah parameters </h3>

[surah_name] is the surah name IN ENGLISH (ie- "Al-Fatihah")

Examples for endpoints:<br>
http://iqra.sytes.net:5555/en/surah?fuzzy=albaqara<br>
or<br>
http://iqra.sytes.net:5555/ar/surah?exact=Al-Baqarah

I'd like to see if anyone comes up with errors, so please report if you find any on this post. I'll be monitoring the backend to see if any errors are thrown.

I'm also attempting to measure how many requests my server will handle, so I can throttle it later on. Feel free to request until your heart's content.

I only want to open this for 8 to 12 hours, so I can make any changes I need to tonight.

Please let me know any questions or comments! Thank you!

<ol>
  # surah_name <i><u><b> Enter WITHOUT single quotes </b></u></i>
<li>'Al-Fatihah'
<li>'Al-Baqarah'
<li>'Ali-'Imran'
<li>'An-Nisa''
<li>'Al-Ma'idah'
<li>'Al-An'am'
<li>'Al-A'raf'
<li>'Al-Anfal'
<li>'At-Tawbah'
<li>'Yunus'
<li>'Hud'
<li>'Yusuf'
<li>'Ar-Ra'd'
<li>'Ibrahim'
<li>'Al-Hijr'
<li>'An-Nahl'
<li>'Al-Isra'
<li>'Al-Kahf'
<li>'Maryam'
<li>'Taha'
<li>'Al-Anbya'
<li>'Al-Hajj'
<li>'Al-Mu'minun'
<li>'An-Nur'
<li>'Al-Furqan'
<li>'Ash-Shu'ara'
<li>'An-Naml'
<li>'Al-Qasas'
<li>'Al-Ankabut'
<li>'Ar-Rum'
<li>'Luqman'
<li>'As-Sajdah'
<li>'Al-Ahzab'
<li>'Saba'
<li>'Fatir'
<li>'Ya-Sin'
<li>'As-Saffat'
<li>'Sad'
<li>'Az-Zumar'
<li>'Ghafir'
<li>'Fussilat'
<li>'Ash-Shuraa'
<li>'Az-Zukhruf'
<li>'Ad-Dukhan'
<li>'Al-Jathiyah'
<li>'Al-Ahqaf'
<li>'Muhammad'
<li>'Al-Fath'
<li>'Al-Hujurat'
<li>'Qaf'
<li>'Adh-Dhariyat'
<li>'At-Tur'
<li>'An-Najm'
<li>'Al-Qamar'
<li>'Ar-Rahman'
<li>'Al-Waqi-ah'
<li>'Al-Hadid'
<li>'Al-Mujadila'
<li>'Al-Hashr'
<li>'Al-Mumtahanah'
<li>'As-Saf'
<li>'Al-Jumu'ah'
<li>'Al-Munafiqun'
<li>'At-Taghabun'
<li>'At-Talaq'
<li>'At-Tahrim'
<li>'Al-Mulk'
<li>'Al-Qalam'
<li>'Al-Haqqah'
<li>'Al-Ma'arij'
<li>'Nuh'
<li>'Al-Jinn'
<li>'Al-Muzzammil'
<li>'Al-Muddathir'
<li>'Al-Qiyamah'
<li>'Al-Insan'
<li>'Al-Mursalat'
<li>'An-Naba'
<li>'An-Nazi'at'
<li>''Abasa'
<li>'At-Takwir'
<li>'Al-Infitar'
<li>'Al-Mutaffifin'
<li>'Al-Inshiqaq'
<li>'Al-Buruj'
<li>'At-Tariq'
<li>'Al-A'la'
<li>'Al-Ghashiyah'
<li>'Al-Fajr'
<li>'Al-Balad'
<li>'Ash-Shams'
<li>'Al-Layl'
<li>'Ad-Duhaa'
<li>'Ash-Sharh'
<li>'At-Tin'
<li>'Al-'Alaq'
<li>'Al-Qadr'
<li>'Al-Bayyinah'
<li>'Az-Zalzalah'
<li>'Al-'Adiyat'
<li>'Al-Qari'ah'
<li>'At-Takathur'
<li>'Al-'Asr'
<li>'Al-Humazah'
<li>'Al-Fil'
<li>'Quraysh'
<li>'Al-Ma'un'
<li>'Al-Kawthar'
<li>'Al-Kafirun'
<li>'An-Nasr'
<li>'Al-Masad'
<li>'Al-Ikhlas'
<li>'Al-Falaq'
<li>'An-Nas'


</ol>

