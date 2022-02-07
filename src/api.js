const express = require("express");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();

router.get("/equipos", (req, res) => {
  res.json([
      {
      "id": 1,
      "abreviacion": "ATL",
      "ciudad": "Atlanta",
      "conferencia": "East",
      "division": "Southeast",
      "nombre_completo": "Atlanta Hawks",
      "nombre": "Hawks",
      "logo": "https://seeklogo.com/images/N/nba-atlanta-hawks-logo-66FC641EB4-seeklogo.com.png",
      mejores_jugadores: {
        "puntos":"Trae Young",
        "rebotes":"John Collins",
        "asistencias":"De'Andre Hunter"
      }
      },
      {
      "id": 2,
      "abbreviation": "BOS",
      "city": "Boston",
      "conference": "East",
      "division": "Atlantic",
      "full_name": "Boston Celtics",
      "name": "Celtics",
      "logo":"https://seeklogo.com/images/B/boston-celtics-logo-1FE499BFC3-seeklogo.com.png",
      mejores_jugadores: {
        "puntos":"Jayson Tatum",
        "rebotes":"Jaylen Brown",
        "asistencias":"Dennis Schroder"
      }
      },
      {
      "id": 3,
      "abbreviation": "BKN",
      "city": "Brooklyn",
      "conference": "East",
      "division": "Atlantic",
      "full_name": "Brooklyn Nets",
      "name": "Nets",
      "logo":"https://seeklogo.com/images/B/brooklyn-nets-logo-CBE7DF14E6-seeklogo.com.png",
      mejores_jugadores: {
        "puntos":"Kevin Durant",
        "rebotes":"James Harden",
        "asistencias":"Kyrie Irving"
      }
      },
      {
      "id": 4,
      "abbreviation": "CHA",
      "city": "Charlotte",
      "conference": "East",
      "division": "Southeast",
      "full_name": "Charlotte Hornets",
      "name": "Hornets",
      "logo":"https://seeklogo.com/images/N/nba-charlotte-hornets-logo-CA24EBAADE-seeklogo.com.png",
      mejores_jugadores: {
        "puntos":"Miles Bridges",
        "rebotes":"LaMelo Ball",
        "asistencias":"Terry Rozier"
      }
      },
      {
      "id": 5,
      "abbreviation": "CHI",
      "city": "Chicago",
      "conference": "East",
      "division": "Central",
      "full_name": "Chicago Bulls",
      "name": "Bulls",
      "logo":"https://seeklogo.com/images/C/chicago-bulls-logo-60FB510213-seeklogo.com.png",
      mejores_jugadores: {
        "puntos":"Demar Derozan",
        "rebotes":"Zach Lavine",
        "asistencias":"Nikola Vucevic"
      }
      },
      {
      "id": 6,
      "abbreviation": "CLE",
      "city": "Cleveland",
      "conference": "East",
      "division": "Central",
      "full_name": "Cleveland Cavaliers",
      "name": "Cavaliers",
      "logo":"https://seeklogo.com/images/C/cleveland-cavaliers-logo-DAA1AE4FA4-seeklogo.com.png",
      mejores_jugadores: {
        "puntos":"Darius Garland",
        "rebotes":"Jarrett Allen",
        "asistencias":"Collin Sexton"
      }
      },
      {
      "id": 7,
      "abbreviation": "DAL",
      "city": "Dallas",
      "conference": "West",
      "division": "Southwest",
      "full_name": "Dallas Mavericks",
      "name": "Mavericks",
      "logo":"https://seeklogo.com/images/D/dallas-mavericks-logo-A4F3AD52F0-seeklogo.com.png",
      mejores_jugadores: {
        "puntos":"Kristaps Porzingis",
        "rebotes":"Boban Marjanovic",
        "asistencias":"Luka Doncic"
      }
      },
      {
      "id": 8,
      "abbreviation": "DEN",
      "city": "Denver",
      "conference": "West",
      "division": "Northwest",
      "full_name": "Denver Nuggets",
      "name": "Nuggets",
      "logo":"https://seeklogo.com/images/D/denver-nuggets-intl-logo-B7D4FE060B-seeklogo.com.png",
      mejores_jugadores: {
        "puntos":"Nikola Jokic",
        "rebotes":"Aaron Gordon",
        "asistencias":"Will Barton"
      }
      },
      {
      "id": 9,
      "abbreviation": "DET",
      "city": "Detroit",
      "conference": "East",
      "division": "Central",
      "full_name": "Detroit Pistons",
      "name": "Pistons",
      "logo":"https://seeklogo.com/images/D/detroit-pistons-logo-D352385AEF-seeklogo.com.png",
      mejores_jugadores: {
        "puntos":"Cade Cunningham",
        "rebotes":"Saddiq Bey",
        "asistencias":"Frank Jackson"
      }
      },
      {
      "id": 10,
      "abbreviation": "GSW",
      "city": "Golden State",
      "conference": "West",
      "division": "Pacific",
      "full_name": "Golden State Warriors",
      "name": "Warriors",
      "logo":"https://seeklogo.com/images/G/golden-state-warriors-logo-C4106147E7-seeklogo.com.png",
      mejores_jugadores: {
        "puntos":"Stephen Curry",
        "rebotes":"Kevon Looney",
        "asistencias":"Andrew Wiggins"
      }
      },
      {
      "id": 11,
      "abbreviation": "HOU",
      "city": "Houston",
      "conference": "West",
      "division": "Southwest",
      "full_name": "Houston Rockets",
      "name": "Rockets",
      "logo":"https://seeklogo.com/images/H/houston-rockets-logo-1AD80DE2AF-seeklogo.com.png",
      mejores_jugadores: {
        "puntos":"Christian Wood",
        "rebotes":"Jalen Green",
        "asistencias":"Eric Gordon"
      }
      },
      {
      "id": 12,
      "abbreviation": "IND",
      "city": "Indiana",
      "conference": "East",
      "division": "Central",
      "full_name": "Indiana Pacers",
      "name": "Pacers",
      "logo":"https://seeklogo.com/images/I/indiana-pacers-logo-99373FBDEA-seeklogo.com.png",
      mejores_jugadores: {
        "puntos":"Domantas Sabonis",
        "rebotes":"Caris LeVert",
        "asistencias":"Malcolm Brogdon"
      }
      },
      {
      "id": 13,
      "abbreviation": "LAC",
      "city": "LA",
      "conference": "West",
      "division": "Pacific",
      "full_name": "LA Clippers",
      "name": "Clippers",
      "logo":"https://seeklogo.com/images/L/la-clippers-logo-D831C30029-seeklogo.com.png",
      mejores_jugadores: {
        "puntos":"Paul George",
        "rebotes":"Ivica Zubac",
        "asistencias":"Reggie Jackson"
      }
      },
      {
      "id": 14,
      "abbreviation": "LAL",
      "city": "Los Angeles",
      "conference": "West",
      "division": "Pacific",
      "full_name": "Los Angeles Lakers",
      "name": "Lakers",
      "logo":"https://seeklogo.com/images/L/los-angeles-lakers-logo-BA16455BF3-seeklogo.com.png",
      mejores_jugadores: {
        "puntos":"LeBron James",
        "rebotes":"Anthony Davis",
        "asistencias":"Russell Westbrook"
      }
      },
      {
      "id": 15,
      "abbreviation": "MEM",
      "city": "Memphis",
      "conference": "West",
      "division": "Southwest",
      "full_name": "Memphis Grizzlies",
      "name": "Grizzlies",
      "logo":"https://seeklogo.com/images/M/memphis-grizzlies-logo-7550074A10-seeklogo.com.png",
      mejores_jugadores: {
        "puntos":"Ja Morant",
        "rebotes":"Steven Adams",
        "asistencias":"Dillon Brooks"
      }
      },
      {
      "id": 16,
      "abbreviation": "MIA",
      "city": "Miami",
      "conference": "East",
      "division": "Southeast",
      "full_name": "Miami Heat",
      "name": "Heat",
      "logo":"https://seeklogo.com/images/M/miami-heat-logo-83BB9EFF58-seeklogo.com.png",
      mejores_jugadores: {
        "puntos":"Jimmy Butler",
        "rebotes":"Bam Adebayo",
        "asistencias":"Tyler Herro"
      }
      },
      {
      "id": 17,
      "abbreviation": "MIL",
      "city": "Milwaukee",
      "conference": "East",
      "division": "Central",
      "full_name": "Milwaukee Bucks",
      "name": "Bucks",
      "logo":"https://seeklogo.com/images/M/milwaukee-bucks-logo-1FB6E617D0-seeklogo.com.png",
      mejores_jugadores: {
        "puntos":"Giannis Antetokounmpo",
        "rebotes":"Khris Middleton",
        "asistencias":"Jrue Holiday"
      }
      },
      {
      "id": 18,
      "abbreviation": "MIN",
      "city": "Minnesota",
      "conference": "West",
      "division": "Northwest",
      "full_name": "Minnesota Timberwolves",
      "name": "Timberwolves",
      "logo":"https://seeklogo.com/images/M/minnesota-timberwolves-logo-B362F9482F-seeklogo.com.png",
      mejores_jugadores: {
        "puntos":"Karl-Anthony Towns",
        "rebotes":"Anthony Edwards",
        "asistencias":"D'Angello Russell"
      }
      },
      {
      "id": 19,
      "abbreviation": "NOP",
      "city": "New Orleans",
      "conference": "West",
      "division": "Southwest",
      "full_name": "New Orleans Pelicans",
      "name": "Pelicans",
      "logo":"https://seeklogo.com/images/N/new-orleans-pelicans-logo-67880DAB9E-seeklogo.com.png",
      mejores_jugadores: {
        "puntos":"Brandon Ingram",
        "rebotes":"Jonas Valanciunas",
        "asistencias":"Brandom Ingram"
      }
      },
      {
      "id": 20,
      "abbreviation": "NYK",
      "city": "New York",
      "conference": "East",
      "division": "Atlantic",
      "full_name": "New York Knicks",
      "name": "Knicks",
      "logo":"https://seeklogo.com/images/N/new-york-knicks-logo-7BCA2D9A68-seeklogo.com.png",
      mejores_jugadores: {
        "puntos":"Julius Randle",
        "rebotes":"Nerlens Noel",
        "asistencias":"Mitchell Robinson"
      }
      },
      {
      "id": 21,
      "abbreviation": "OKC",
      "city": "Oklahoma City",
      "conference": "West",
      "division": "Northwest",
      "full_name": "Oklahoma City Thunder",
      "name": "Thunder",
      "logo":"https://seeklogo.com/images/O/oklahoma-city-thunder-nba-logo-76BBE35B6A-seeklogo.com.png",
      mejores_jugadores: {
        "puntos":"Gilgeous Alexander",
        "rebotes":"Josh Giddey",
        "asistencias":"Mike Muscala"
      }
      },
      {
      "id": 22,
      "abbreviation": "ORL",
      "city": "Orlando",
      "conference": "East",
      "division": "Southeast",
      "full_name": "Orlando Magic",
      "name": "Magic",
      "logo":"https://seeklogo.com/images/O/orlando-magic-logo-BBE03E04A3-seeklogo.com.png",
      mejores_jugadores: {
        "puntos":"Cole Anthony",
        "rebotes":"Wendell Carter Jr",
        "asistencias":"Franz Wagner"
      }
      },
      {
      "id": 23,
      "abbreviation": "PHI",
      "city": "Philadelphia",
      "conference": "East",
      "division": "Atlantic",
      "full_name": "Philadelphia 76ers",
      "name": "76ers",
      "logo":"https://seeklogo.com/images/P/philadelphia-76ers-logo-1B0F580BA2-seeklogo.com.png",
      mejores_jugadores: {
        "puntos":"Gary Clark",
        "rebotes":"Seth Curry",
        "asistencias":"Joel Embiid"
      }
      },
      {
      "id": 24,
      "abbreviation": "PHX",
      "city": "Phoenix",
      "conference": "West",
      "division": "Pacific",
      "full_name": "Phoenix Suns",
      "name": "Suns",
      "logo":"https://seeklogo.com/images/P/phoenix-suns-logo-E88B4F8EBA-seeklogo.com.png",
      mejores_jugadores: {
        "puntos":"Deandre Ayton",
        "rebotes":"Bismack Biyombo",
        "asistencias":"Devin Booker"
      }
      },
      {
      "id": 25,
      "abbreviation": "POR",
      "city": "Portland",
      "conference": "West",
      "division": "Northwest",
      "full_name": "Portland Trail Blazers",
      "name": "Trail Blazers",
      "logo":"https://seeklogo.com/images/P/portland-trail-blazers-logo-8016836772-seeklogo.com.png",
      mejores_jugadores: {
        "puntos":"Keljin Blevins",
        "rebotes":"Greg Brown III",
        "asistencias":"CJ Elleby"
      }
      },
      {
      "id": 26,
      "abbreviation": "SAC",
      "city": "Sacramento",
      "conference": "West",
      "division": "Pacific",
      "full_name": "Sacramento Kings",
      "name": "Kings",
      "logo":"https://seeklogo.com/images/S/sacramento-kings-logo-EBB8B9D66E-seeklogo.com.png",
      mejores_jugadores: {
        "puntos":"Harrison Barnes",
        "rebotes":"Terence Davis",
        "asistencias":"De'Aaron Fox"
      }
      },
      {
      "id": 27,
      "abbreviation": "SAS",
      "city": "San Antonio",
      "conference": "West",
      "division": "Southwest",
      "full_name": "San Antonio Spurs",
      "name": "Spurs",
      "logo":"https://seeklogo.com/images/S/san-antonio-spurs-logo-344629EB43-seeklogo.com.png",
      mejores_jugadores: {
        "puntos":"Keita Bates-Diop",
        "rebotes":"Devontae Cacok",
        "asistencias":"Zach Collins"
      }
      },
      {
      "id": 28,
      "abbreviation": "TOR",
      "city": "Toronto",
      "conference": "East",
      "division": "Atlantic",
      "full_name": "Toronto Raptors",
      "name": "Raptors",
      "logo":"https://seeklogo.com/images/T/toronto-raptors-logo-5FBA5CDB18-seeklogo.com.png",
      mejores_jugadores: {
        "puntos":"Fred VanVleet",
        "rebotes":"Pascal Siakam",
        "asistencias":"OG Anunoby"
      }
      },
      {
      "id": 29,
      "abbreviation": "UTA",
      "city": "Utah",
      "conference": "West",
      "division": "Northwest",
      "full_name": "Utah Jazz",
      "name": "Jazz",
      "logo":"https://seeklogo.com/images/U/utah-jazz-logo-D841C47B4D-seeklogo.com.png",
      mejores_jugadores: {
        "puntos":"Jared Butler",
        "rebotes":"Mike Conley",
        "asistencias":"Trent Forrest"
      }
      },
      {
      "id": 30,
      "abbreviation": "WAS",
      "city": "Washington",
      "conference": "East",
      "division": "Southeast",
      "full_name": "Washington Wizards",
      "name": "Wizards",
      "logo":"https://seeklogo.com/images/W/washington-wizards-logo-D3D3BB1285-seeklogo.com.png",
      mejores_jugadores: {
        "puntos":"Deni Avdija",
        "rebotes":"Joel Ayayi",
        "asistencias":"Bradley Beal"
      }
      }
      ]);
});

router.get("/jugadores", (req, res) => {
  res.json([
      {
      "id": 1,
      "nombre": "Kevin Durant",
      "equipo": "BROOKLYN NETS",
      "posicion": "PF",
      "image":"https://sportshub.cbsistatic.com/i/r/2021/10/05/07e878bc-d463-4cbe-8ac0-fcd2e4b79bac/thumbnail/100x100/66fbedb8b79b678ad5747daf6093a1bf/1231866.png"
      },
      {
      "id": 2,
      "nombre": "LeBron James",
      "equipo": "LOS ANGELES LAKERS",
      "posicion": "SF",
      "image":"https://sportshub.cbsistatic.com/i/r/2021/10/04/9d13f944-1e11-449e-b8b0-30c2ad7dd589/thumbnail/100x100/f83f72adc642916b0360a648f8f00fee/400553.png"
      },
      {
        "id": 3,
        "nombre": "Giannis Antetokounmpo",
        "equipo": "MILWAUKEE BUCKS",
        "posicion": "PF",
        "image":"https://sportshub.cbsistatic.com/i/r/2021/10/01/74554da7-49a7-4c79-9897-18e2a172644c/thumbnail/100x100/5b0794335565ece3d02f1f468f3a538d/2067655.png"
      },
      {
        "id": 4,
        "nombre": "Stephen Curry",
        "equipo": "GOLDEN STATE WARRIORS",
        "posicion": "PG",
        "image":"https://sportshub.cbsistatic.com/i/r/2021/10/08/1305e3d1-9c0d-476c-8d26-8e2f8bd0cd02/thumbnail/100x100/53f4a06abc4a8599aecbbac69021e69d/1685204.png"
      },
      {
        "id": 5,
        "nombre": "Luka Doncic",
        "equipo": "DALLAS MAVERICKS",
        "posicion": "PG",
        "image":"https://sportshub.cbsistatic.com/i/r/2021/10/05/68a26df6-23b1-47aa-801d-6f56111ae92d/thumbnail/100x100/c108f45908203de6f743e5f10243650f/2900426.png"
      },
      {
          "id": 6,
          "nombre": "Nikola Jokic",
          "equipo": "DENVER NUGGETS",
          "posicion": "C",
          "image":"https://sportshub.cbsistatic.com/i/r/2021/10/06/5eac9b58-6935-4916-a602-d2956612fea0/thumbnail/100x100/3e23d6c6638661148e2d505b330523d2/2135542.png"
      },
      {
        "id": 7,
        "nombre": "James Harden",
        "equipo": "BROOKLYN NETS",
        "posicion": "SG",
        "image":"https://sportshub.cbsistatic.com/i/r/2021/10/05/967423b3-01e0-417e-a43d-4936ec7f1a70/thumbnail/100x100/06705b3b82ba5a5327a66b11e6c95566/1685255.png"
      },
      {
        "id": 8,
        "nombre": "Joel Embiid",
        "equipo": "PHILADELPHIA 76ERS",
        "posicion": "C",
        "image":"https://sportshub.cbsistatic.com/i/r/2021/10/01/6f30f1d3-ed52-4e55-b6b1-ff71007d0c82/thumbnail/100x100/255ac69ddf474c8c2480aa631a6b84d6/2135528.png"
      },
      {
        "id": 9,
        "nombre": "Kawhi Leonard",
        "equipo": "LOS ANGELES CLIPPERS",
        "posicion": "SF",
        "image":"https://sportshub.cbsistatic.com/i/r/2020/12/15/b553d4fd-eb84-4255-8e19-51ea7a81fff1/thumbnail/100x100/8af3bdd7d3389cc2a418035de9d543be/1715792.png"
      },
      {
        "id": 10,
        "nombre": "Anthony Davis",
        "equipo": "LOS ANGELES LAKERS",
        "posicion": "PF",
        "image":"https://sportshub.cbsistatic.com/i/r/2021/10/04/7e5a9b64-650d-48ae-8350-5706a3ff160e/thumbnail/100x100/d4ffa617343797beac02e9aec41c7337/1992786.png"
      },
      {
        "id": 11,
        "nombre": "Damian Lillard",
        "equipo": "PORTLAND TRAIL BLAZERS",
        "posicion": "PG",
        "image":"https://sportshub.cbsistatic.com/i/r/2021/10/12/2a28535b-0fc9-4e6a-8ffc-204181caff9f/thumbnail/100x100/e5c21d2dcc3c17de2ee2ba91a3176364/1992810.png"
      },
      {
        "id": 12,
        "nombre": "Jayson Tatum",
        "equipo": "BOSTON CELTICS",
        "posicion": "SF",
        "image":"https://sportshub.cbsistatic.com/i/r/2021/10/04/3df8e5b3-4421-4451-88dc-2f3c39e7920a/thumbnail/100x100/9e2e32ff71bd4fcaeccad9c46f4caf46/2268018.png"
      },
      {
        "id": 13,
        "nombre": "Paul George",
        "equipo": "LOS ANGELES CLIPPERS",
        "posicion": "SG",
        "image":"https://sportshub.cbsistatic.com/i/r/2021/10/11/b8d205a6-85a4-4f39-b267-8c87d1adbd23/thumbnail/100x100/7e40112558fec908f4fe913b925fd947/1755181.png"
      },
      {
        "id": 14,
        "nombre": "Zion Williamson",
        "equipo": "NEW ORLEANS PELICANS",
        "posicion": "PF",
        "image":"https://sportshub.cbsistatic.com/i/r/2021/10/05/56688dae-5bb0-4b8b-af65-dd90401ca4e9/thumbnail/100x100/64125e3deb3751d8a4d126f8da296a4e/3042398.png"
      },
      {
        "id": 15,
        "nombre": "Jimmy Butler",
        "equipo": "MIAMI HEAT",
        "posicion": "SF",
        "image":"https://sportshub.cbsistatic.com/i/r/2021/10/04/98b4c239-21c0-4bea-8590-0ec76e6f9da6/thumbnail/100x100/0bb17e88f2722f925e2098c36afbf1bf/1646703.png"
      },
      {
        "id": 16,
        "nombre": "Bradley Beal",
        "equipo": "WASHINGTON WIZARDS",
        "posicion": "SG",
        "image":"https://sportshub.cbsistatic.com/i/r/2021/10/01/4210e9a6-4326-4d5a-ab98-4289b8f2914b/thumbnail/100x100/d241eca13fa00ce272f435aee68035cd/1992783.png"
      },
      {
        "id": 17,
        "nombre": "Kyrie Irving",
        "equipo": "BROOKLYN NETS",
        "posicion": "PG",
        "image":"https://sportshub.cbsistatic.com/i/r/2020/12/14/633246b3-2d68-45a2-ac6d-5c82b4c5aace/thumbnail/100x100/a0ced30ec5727531fae240e974903e48/1779901.png"
      },
      {
        "id": 18,
        "nombre": "Trae Young",
        "equipo": "ATLANTA HAWKS",
        "posicion": "PG",
        "image":"https://sportshub.cbsistatic.com/i/r/2021/10/04/7c9cc3b0-2442-4b32-bf5f-75fff70cfdac/thumbnail/100x100/71598f5ec3fcec4fd9c2af729b237697/2938032.png"
      },
      {
        "id": 19,
        "nombre": "Chris Paul",
        "equipo": "PHOENIX SUNS",
        "posicion": "PG",
        "image":"https://sportshub.cbsistatic.com/i/r/2021/10/12/54c52140-109a-42fb-9ab9-3263c9562d98/thumbnail/100x100/e9102a2426ed9f192ed0a668af42fe0b/555969.png"
      },
      {
          "id": 20,
          "nombre": "Donovan Mitchell",
          "equipo": "UTAH JAZZ",
          "posicion": "SG",
          "image":"https://sportshub.cbsistatic.com/i/r/2021/10/05/b2d767b9-654b-470c-bf76-4a9f1687b4a1/thumbnail/100x100/d5a845a64fa094ac0e1d093eba645c5b/2842760.png"
      }
    ]);
});

router.get("/partidos", (req, res) => {
  res.json([
    {
      "id":1,
      "fecha":"2022-01-07",
      "equipo_local":"Atlanta Hawks",
      "equipo_visitante":"Boston Celtics",
      "local_puntos":109,
      "visitante_puntos":86,
      "temporada":"2022",
      "local_logo":"https://seeklogo.com/images/N/nba-atlanta-hawks-logo-66FC641EB4-seeklogo.com.png",
      "visitante_logo":"https://seeklogo.com/images/B/boston-celtics-logo-1FE499BFC3-seeklogo.com.png"
    },
    {
      "id":2,
      "fecha":"2022-01-19",
      "equipo_local":"Brooklyn Nets",
      "equipo_visitante":"Charlotte Hornets",
      "local_puntos":90,
      "visitante_puntos":103,
      "temporada":"2022",
      "local_logo":"https://seeklogo.com/images/B/brooklyn-nets-logo-CBE7DF14E6-seeklogo.com.png",
      "visitante_logo":"https://seeklogo.com/images/N/nba-charlotte-hornets-logo-CA24EBAADE-seeklogo.com.png"
    },
    {
      "id":3,
      "fecha":"2022-01-17",
      "equipo_local":"Chicago Bulls",
      "equipo_visitante":"Cleveland Cavaliers",
      "local_puntos":111,
      "visitante_puntos":123,
      "temporada":"2022",
      "local_logo":"https://seeklogo.com/images/C/chicago-bulls-logo-60FB510213-seeklogo.com.png",
      "visitante_logo":"https://seeklogo.com/images/C/cleveland-cavaliers-logo-DAA1AE4FA4-seeklogo.com.png"
    },
    {
      "id":4,
      "fecha":"2022-02-25",
      "equipo_local":"Dallas Mavericks",
      "equipo_visitante":"Denver Nuggets",
      "local_puntos":88,
      "visitante_puntos":93,
      "temporada":"2022",
      "local_logo":"https://seeklogo.com/images/D/dallas-mavericks-logo-A4F3AD52F0-seeklogo.com.png",
      "visitante_logo":"https://seeklogo.com/images/D/denver-nuggets-intl-logo-B7D4FE060B-seeklogo.com.png"
    },
    {
      "id":5,
      "fecha":"2022-01-22",
      "equipo_local":"Detroit Pistons",
      "equipo_visitante":"Golden State Warriors",
      "local_puntos":99,
      "visitante_puntos":106,
      "temporada":"2022",
      "local_logo":"https://seeklogo.com/images/D/detroit-pistons-logo-D352385AEF-seeklogo.com.png",
      "visitante_logo":"https://seeklogo.com/images/G/golden-state-warriors-logo-C4106147E7-seeklogo.com.png"
    },
    {
      "id":6,
      "fecha":"2022-02-11",
      "equipo_local":"Houston Rockets",
      "equipo_visitante":"Indiana Pacers",
      "local_puntos":101,
      "visitante_puntos":106,
      "temporada":"2022",
      "local_logo":"https://seeklogo.com/images/H/houston-rockets-logo-1AD80DE2AF-seeklogo.com.png",
      "visitante_logo":"https://seeklogo.com/images/I/indiana-pacers-logo-99373FBDEA-seeklogo.com.png"
    },
    {
      "id":7,
      "fecha":"2022-02-16",
      "equipo_local":"LA Clippers",
      "equipo_visitante":"Los Angeles Lakers",
      "local_puntos":119,
      "visitante_puntos":121,
      "temporada":"2022",
      "local_logo":"https://seeklogo.com/images/L/la-clippers-logo-D831C30029-seeklogo.com.png",
      "visitante_logo":"https://seeklogo.com/images/L/los-angeles-lakers-logo-BA16455BF3-seeklogo.com.png"
    },
    {
      "id":8,
      "fecha":"2022-01-25",
      "equipo_local":"Memphis Grizzlies",
      "equipo_visitante":"Miami Heat",
      "local_puntos":98,
      "visitante_puntos":94,
      "temporada":"2022",
      "local_logo":"https://seeklogo.com/images/M/memphis-grizzlies-logo-7550074A10-seeklogo.com.png",
      "visitante_logo":"https://seeklogo.com/images/M/miami-heat-logo-83BB9EFF58-seeklogo.com.png"
    },
    {
      "id":9,
      "fecha":"2022-01-13",
      "equipo_local":"Milwaukee Bucks",
      "equipo_visitante":"Minnesota Timberwolves",
      "local_puntos":103,
      "visitante_puntos":104,
      "temporada":"2022",
      "local_logo":"https://seeklogo.com/images/M/milwaukee-bucks-logo-1FB6E617D0-seeklogo.com.png",
      "visitante_logo":"https://seeklogo.com/images/M/minnesota-timberwolves-logo-B362F9482F-seeklogo.com.png"
    },
    {
      "id":10,
      "fecha":"2022-02-03",
      "equipo_local":"Utah Jazz",
      "equipo_visitante":"Phoenix Suns",
      "local_puntos":128,
      "visitante_puntos":83,
      "temporada":"2022",
      "local_logo":"https://seeklogo.com/images/U/utah-jazz-logo-D841C47B4D-seeklogo.com.png",
      "visitante_logo":"https://seeklogo.com/images/P/phoenix-suns-logo-E88B4F8EBA-seeklogo.com.png"
    }
    ]);
});

app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);