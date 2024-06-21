import React from "react";

const Sdata = [
  {
    id: 1,
    imgsrc:
      "https://upload.wikimedia.org/wikipedia/en/d/da/DarkNetflixPosterEnglish.jpg",
    tittle: " A Netflix Orignal Series ",
    sname: " Dark ",
    link: " https://www.netflix.com/pk/title/80100172 ",
  },
  {
    id: 2,
    imgsrc:
      "https://occ-0-5346-64.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABfiqv2Th67pFLpn6jzARZGNhBFTtaTfd4i5KPN1-WoxqDUerVqy4i7Yw_hRk146SO2KGIjra0RIIuHbv8oZ0m9LV5YZItZygejeC.jpg?r=15c",
    tittle: " A Netflix Orignal Series ",
    sname: " Peaky Blinders ",
    link: " https://www.netflix.com/pk/title/80002479?source=35 ",
  },
  {
    id: 3,
    imgsrc:
      "https://occ-0-5346-64.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABa8IXG6QsIiB663K_eVXj6QoDtN76B2zYxXMI2mAD_F4P0UZDXmRfrH3GDJ6yCcRi3r1hPTEhoQyBqcbB3r_mTom_7cvHjhW94vH.jpg?r=cca",
    tittle: " A Netflix Orignal Series ",
    sname: " Vikings ",
    link: " https://www.netflix.com/pk/title/70301870 ",
  },
  {
    id: 4,
    imgsrc:
      "https://occ-0-5346-64.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABT09PWVOB_YDhRdVwjyCfIDrmIicZ8ghJ93Se7SXLG3m-XGDAi7nVK4s-Fqnk-mJrk75KfYQKfxPC5UVIwIP6QqU9v57dBfk3VyG.jpg?r=496",
    tittle: " A Netflix Orignal Series ",
    sname: " 1899 ",
    link: " https://www.netflix.com/pk/title/80214497?source=35 ",
  },
  {
    id: 5,
    imgsrc:
      "https://occ-0-5346-64.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABd4Uqxr5LY9_D8eZDiqOUHRttTWF7vXrcoPCtS3fjeQ7Rn7iX8cWdImKWWd9x0txaWiUBW0mOeDoiG0C9haj-4ROgoa3R5syQ7HT.jpg?r=051",
    tittle: "A Netflix Orignal Series ",
    sname: "The Witcher",
    link: "https://www.netflix.com/pk/title/80189685",
  },
  {
    id: 6,
    imgsrc:
      "https://occ-0-5346-64.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABaoWz1IQy3o1xJ87TrjbFg9UBuTBiiFC12dVj3mpgXo8awxF21WBiLu1VtwdJM-XMG-aS9e-owWTgub--nnnlGisCIWvPcWHna4H.jpg?r=d4f",
    tittle: "A Netflix Orignal Series",
    sname: "MINDHUNTER",
    link: "https://www.netflix.com/pk/title/80114855",
  },
  {
    id: 7,
    imgsrc:
      "https://occ-0-5346-64.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABcuF-ASdk8ggKxXR_kgnbvX1BAotwohyNYWx_jn7ixfCdiToeoYBnF_pXm8sLOqG-yy9Rgu4dUtjKdaiX9QlT4j-tUKRmBouW4zz.jpg?r=a9c",
    tittle: "A Netflix Orignal Series",
    sname: "Better Call Saul",
    link: "https://www.netflix.com/pk/title/80021955",
  },
  {
    id: 8,
    link: "https://www.netflix.com/pk/title/81669779?source=35",
    tittle: " A Netflix Orignal Series ",
    sname: " Destined with You ",
    imgsrc:
      " https://occ-0-5346-2773.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABTaIn_bFHQjSJOMcPgSeyC1cycj--E3UURPxKGgltUXbrusQQGZADAzeEpp3Ow4ElYMmDWPCKAEVPrG9Az0-PcyfBGKsLCy8l3qQ.jpg?r=1d4 ",
  },
  {
    id: 9,
    link: "https://www.netflix.com/pk/title/81040344?source=35",
    tittle: " A Netflix Orignal Series ",
    sname: " Squid Game ",
    imgsrc:
      " https://occ-0-5346-2773.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABW2vHT_kRiIFO3spVWZwdWkXcxqJNrqkwN9mRw8q-yiY0hi3ho64Ce5nh3QXG4F5oaEZUDNYCWK8y-aKlaUMEsTmOd3mOZwIfvEQ.jpg?r=0b1 ",
  },
  {
    id: 10,
    link: "https://www.netflix.com/pk/title/81256675",
    tittle: " A Netflix Orignal Series ",
    sname: " Hellbound ",
    imgsrc:
      " https://occ-0-5346-2773.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABQAdd21GSIm6btjOUJ_XMqKpdKLQ8WK-jtbyL1o3ccXrzYzf8iqEiFi35GHt-xj0hQzy1YdSmnqqa8wEtxCp8-Q5iqrEhDjYJt58.jpg?r=d0c ",
  },
  {
    id: 11,
    link: "https://www.netflix.com/pk/title/80074249?source=35",
    tittle: " A Netflix Orignal Series ",
    sname: " The Last Kingdom ",
    imgsrc:
      " https://occ-0-5346-2773.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABeITMb7keXHG8JETIWR0z06U6Y7-xPZ_cseyrzjCxAz2uPZDRRMb1EcDGQHUfD6M0DKecDXM81jL5hag323x6JGo73MCVNiZ0XmH.jpg?r=539 ",
  },
  {
    id: 12,
    imgsrc:
      "https://occ-0-5346-2773.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABb4w2dQO3p0-s44lzN6aICjJoxjQj68OOvodmfaTvYM1KsrW1n4NpuADctUvt3ns5lTh0PtqGogmavL8PrnAlcZ6kEo2fE6XnwyW.jpg?r=754",
    tittle: "A Netflix Orignal Series ",
    sname: " Frontier ",
    link: "https://www.netflix.com/pk/title/80099656",
  },
  {
    id: 13,
    imgsrc:
      "https://occ-0-5346-2773.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABbGFKtKEzyWI_SHRkCd7dz-5y5zth5prL_NgVWKMRMjGXa-qB1bD0KIPHQAFbF5LHcJgW0Qa9J9diObcJJkyR7ahu6LX8mmDmkz7.jpg?r=ce9",
    tittle: "A Netflix Orignal Series",
    sname: " Cursed ",
    link: "https://www.netflix.com/pk/title/80199393",
  },
  {
    id: 14,
    imgsrc:
      "https://occ-0-5346-2773.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABRg82uh8NXVekCopROQkRKwVcqZ9BYzOXB6Rr34CJXjkFRlwmvxhVHM8SXvxFuqBlXTmgbyf_COUUK-8zUQCEPW33qvz3uwET20x.jpg?r=c13",
    tittle: "A Netflix Orignal Series",
    sname: "Shadow and Bone",
    link: "https://www.netflix.com/pk/title/80236319?source=35",
  },
  {
    id: 15,
    imgsrc:
      "https://occ-0-5346-2773.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABb93q59zElwrxepTi-f4Ywee9BjyxZjMi_ciAkuKPheCVN0PI533dX5Nd61_BWm9_kt9dDS22CpWuXPnUvYEkEMI7gbyZy6NxTIF.jpg?r=5a8",
    tittle: "A Netflix Orignal Series",
    sname: "Shadowhunters: The Mortal Instruments",
    link: "https://www.netflix.com/pk/title/80084447",
  },
  {
    id: 16,
    imgsrc:
      "https://occ-0-5346-2773.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABfKifMxxzLJt7q_b3OcVgOhuI5bHPnJyISd1MRVhZl1NeLid_TrwhdKtpseVDTC0p1nzXNfqMPw70o1tz7reLPjv3D5D3ASF1Sqd.jpg?r=51d",
    tittle: " A Netflix Orignal Series ",
    sname: " My Demon ",
    link: " https://www.netflix.com/pk/title/81716080",
  },
  {
    id: 17,
    imgsrc:
      "https://occ-0-5346-2773.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABUU8uzPEMZh5sKmKgWx5ZiZQVpMsaoxiC1Z9dsM5EizBj4oyt4r-3qNszpTI9XhBPkzyWnplmIscsKpeAPD2KGeETH6JL7nwJkKi.jpg?r=8bf",
    tittle: " A Netflix Orignal Series ",
    sname: " The Sandman",
    link: " https://www.netflix.com/pk/title/81150303 ",
  },
  {
    id: 18,
    imgsrc:
      " https://occ-0-5346-2773.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABcT0LToSWT9CBVYeu4qI4HpISkL7ORn9R4cbeqp6yUNzgNSKR4lK3yii0bJ6X0_fsrpK5UqWLYhapL83YUU-cG4gUQgjnG_xaP4W.jpg?r=873",
    tittle: " A Netflix Orignal Series ",
    sname: " The SandmanExtracurricular ",
    link: " https://www.netflix.com/pk/title/80990668 ",
  },
];

export default Sdata;
