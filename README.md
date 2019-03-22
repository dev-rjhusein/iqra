# iqra
Quran REST API

Asalamu Alaikum!

I am creating a REST API using Java and Spring that serves Surahs from the Quran. I would like some feedback and error reports, if you have the time!☪️

The current endpoints are:
<h4>http://<span></span>iqra.sytes.net:5555/{language}/surah?{type}={surah_name}</h4>

[language] can be 'en' for english or 'ar' for arabic.

[type] can by 'fuzzy' for a fuzzy search (approximation) or 'exact' for an exact entry.

[surah_name] is the surah name IN ENGLISH (ie- "Al-Fatihah")

Examples for endpoints:<br>
http://iqra.sytes.net:5555/en/surah?fuzzy=albaqara<br>
or<br>
http://iqra.sytes.net:5555/ar/surah?exact=Al-Baqarah

I'd like to see if anyone comes up with errors, so please report if you find any on this post. I'll be monitoring the backend to see if any errors are thrown.

I'm also attempting to measure how many requests my server will handle, so I can throttle it later on. Feel free to request until your heart's content.

I only want to open this for 8 to 12 hours, so I can make any changes I need to tonight.

Please let me know any questions or comments! Thank you!
