
# iqra ☪️ اقرأ
Quran REST API

Asalamu Alaikum! | السَّلَامُ عَلَيْكُمْ

This is a REST API that serves Surahs from the Quran - pretty straight forward.

Endpoints:

api.iqra.devrj.xyz/surah/{language code}/{type}?{parameter}={desired value}

&#x200B;

**{language code}** can be 'en' or 'ar' --- If you want English or Arabic text

**{type}** can be 'number' or 'name' --- If you want to search by Surah name, or it's number (ie. Al-Baqarah is '2')

**{parameter}** is different depending on {type}: 

If you search by **name**, then parameter can be **exact** or **fuzzy**. Exact requires you to enter a {desired value} that matches the database record exactly, so I don't suggest using it. Fuzzy will match the surah closest to what is entered, if anything. This uses MySQL's SOUNDEX() function and the Levenshtein edit distance algorithm (from Apache Commons).

If you search by **number**, then the parameter is **id***,* the {desired value} can be any integer between **1 and 114.**

EXAMPLES:

To search for Surah An-Nas by name and get the Arabic version.

[api.iqra.devrj.xyz/surah/ar/name?fuzzy=annas](https://api.iqra.devrj.xyz/surah/ar/name?fuzzy=annas)

&#x200B;

To search for Surah Al-Qiyamah by number and get the English translation.

[api.iqra.devrj.xyz/surah/en/number?id=75](https://api.iqra.devrj.xyz/surah/en/number?id=75)

&#x200B;

**What's returned:**

title: -- The name of the surah in arabic text

title\_eng: -- The name of the surah in english text

ayah\_count: -- The number of ayahs in the surah (for quick iteration)

ayahs: -- Numbered ayah text

indicies: -- Numbered absolute ayah numbers (for loading audio files)

&#x200B;

**ALSO:**

Audio files are hosted at [devrj.xyz/iqra/quran\_audio/{index}.mp3](https://devrj.xyz/iqra/quran_audio/{index}.mp3) (*The index is provided by the endpoints in 'indicies')*

&&

I made a very quick, ugly, does the trick site to demo the API, if you don't feel like searching the endpoints:

[iqra.devrj.xyz](https://iqra.devrj.xyz)

&#x200B;

NOTES:

1) This is hosted using my own raspberry pi's and the cheapy AWS Lightsail option - IT'S NOT FAST lol

2) The demo site loads slower for longer surahs, because right now it loads all audio files at once. Eventually I will make a more sophisticated 'one-page' site that loads only a few at a time or on demand.

3) I plan on adding support to search for specific ayahs and by juz' - Insha-allah before Ramadan

&#x200B;

Please make any comments or suggestions by pull request or email me at dev.rjhusein@gmail.com
