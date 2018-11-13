[![Build Status](https://travis-ci.org/cdes/m3dood.svg?branch=master)](https://travis-ci.org/cdes/m3dood)
[![NPM](https://img.shields.io/npm/v/:m3dood.svg)](https://www.npmjs.com/package/m3dood)


<h1 align="center">M3dood معدود</h1>

<p align="center">A function to get the grammatically correct "m3dood" for a number in Arabic.</p>
<p align="center">دالة توفر المعدود العربي الصحيح نحوياً للرقم المعطى</p>

<hr/>

<p> Provides the grammatically correct "m3dood" for a number. </p>

<ul>
  <li>Simple detection of entity gender</li>
  <li>Handles entity counts from 0 to 99+</li>
</ul>

<h3> Download & Installation </h3>

```shell
$ yarn add m3dood
```

```shell
$ npm i m3dood
```

<h3> Usage </h3>

```js
import m3dood from 'm3dood';

const books = m3dood(3, "كتاب", "كتابان", "كتب");

console.log(books);
```

this will return
```js
"3 كتب"
```

<h3> Examples </h3>
<ul>
 <li>دون كتب</li>
 <li>كتاب واحد</li>
 <li>كتابان</li>
 <li>3 كتب</li>
 <li>10 كتب</li>
 <li>11 كتاب</li>
 <li>101 من الكتب</li>
 <li>103 كتب</li>
</ul>

<h3>Contributing</h3>
Keep it simple. Keep it minimal. Don't put every single feature just because you can.

<h3>Authors or Acknowledgments</h3>
<ul>
  <li>Ahmed Al-Haddad <a href="https://github.com/cdes/">@cdes</a></li>
  <li>Khaled Al-Sham'aa <a href="http://www.ar-php.org/">ar-php</a></li>
</ul>

<h3>License</h3>

This project is licensed under the MIT License
