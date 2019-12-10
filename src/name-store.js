export default {

    'genders': ['Male', 'Female'],

    'statNames': ['Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom', 'Charisma'],

    'classTypes': {
        'Barbarian': {
            'TopStats': ['Strength']
        },
        'Bard': {
            'TopStats': ['Charisma']
        },
        'Cleric': {
            'TopStats': ['Wisdom']
        },
        'Druid': {
            'TopStats': ['Wisdom']
        },
        'Fighter': {
            'TopStats': ['Strength', 'Dexterity']
        },
        'Monk': {
            'TopStats': ['Dexterity', 'Wisdom']
        },
        'Paladin': {
            'TopStats': ['Strength', 'Constitution']
        },
        'Ranger': {
            'TopStats': ['Dexterity', 'Wisdom']
        },
        'Rogue': {
            'TopStats': ['Dexterity']
        },
        'Sorcerer': {
            'TopStats': ['Charisma']
        },
        'Warlock': {
            'TopStats': ['Charisma']
        },
        'Wizard': {
            'TopStats': ['Intelligence']
        }
    },


    'races': {
        'Dragonborn': {
            'statBonus': {
                'Strength': 2,
                'Charisma': 1
            },

            'Gender': {
                'Male': {
                    'FirstNames': ['Arjhan', 'Balasar', 'Bharash', 'Donaar', 'Ghesh', 'Heskan', 'Kriv', 'Medrash', 'Mehen', 'Nadarr', 'Pandjed', 'Patrin', 'Rhogar', 'Shamash', 'Shedinn', 'Tarhun', 'Torinn']
                },
                'Female': {
                    'FirstNames': ['Akra', 'Biri', 'Daar', 'Farideh', 'Harann', 'Havilar', 'Jheri', 'Kava', 'Korinn', 'Mishann', 'Nala', 'Perra', 'Raiann', 'Sora', 'Surina', 'Thava', 'Uadjit']
                }
            },
            'LastNames': ['Clethtinthiallor', 'Daardendrian', 'Delmirev', 'Drachedandion', 'Fenkenkabradon', 'Kepeshkmolik', 'Kerrhylon', 'Kimbatuul', 'Linxakasendalor', 'Myastan', 'Nemmonis', 'Norixius', 'Ophinshtalajiir', 'Prexijandilin', 'Shestendeliath', 'Turnuroth', 'Verthisathurgiesh', 'Yarjerit']

        },
        'Dwarf': {
            'statBonus': {
                'Constitution': 2
            },

            'Gender': {
                'Male': {
                    'FirstNames': ['Adrik', 'Alberich', 'Baern', 'Barendd', 'Brottor', 'Bruenor', 'Dain', 'Darrak', 'Delg', 'Eberk', 'Einkil', 'Fargrim', 'Flint', 'Gardain', 'Harbek', 'Kildrak', 'Morgran', 'Orsik', 'Oskar', 'Rangrim', 'Rurik', 'Taklinn', 'Thoradin', 'Thorin', 'Tordek', 'Traubon', 'Travok', 'Ulfgar', 'Veit', 'Vondal']
                },
                'Female': {
                    'FirstNames': ['Amber', 'Artin', 'Audhild', 'Bardryn', 'Dagnal', 'Diesa', 'Eldeth', 'Falkrunn', 'Finellen', 'Gunnloda', 'Gurdis', 'Helja', 'Hlin', 'Kathra', 'Kristryd', 'Ilde', 'Liftrasa', 'Mardred', 'Riswynn', 'Sannl', 'Torbera', 'Torgga', 'Vistra']
                }
            },
            'LastNames': ['Balderk', 'Battlehammer', 'Brawnanvil', 'Dankil', 'Fireforge', 'Frostbeard', 'Gorunn', 'Holderhek', 'Ironfist', 'Loderr', 'Lutgehr', 'Rumnaheim', 'Strakeln', 'Torunn', 'Ungart']
        },

        'Elf': {
            'statBonus': {
                'Dexterity': 2
            },

            'Gender': {
                'Male': {
                    'FirstNames': ['Adran', 'Aelar', 'Aramil', 'Arannis', 'Aust', 'Beiro', 'Berrian', 'Carric', 'Enialis', 'Erdan', 'Erevan', 'Galinndan', 'Hadarai', 'Heian', 'Himo', 'Immeral', 'Ivellios', 'Laucian', 'Mindartis', 'Paelias', 'Peren', 'Quarion', 'Riardon', 'Rolen', 'Soveliss', 'Thamior', 'Tharivol', 'Theren', 'Varis']
                },
                'Female': {
                    'FirstNames': ['Adrie', 'Althaea', 'Anastrianna', 'Andraste', 'Antinua', 'Bethrynna', 'Birel', 'Caelynn', 'Drusilia', 'Enna', 'Felosial', 'Ielenia', 'Jelenneth', 'Keyleth', 'Leshanna', 'Lia', 'Meriele', 'Mialee', 'Naivara', 'Quelenna', 'Quillathe', 'Sariel', 'Shanairra', 'Shava', 'Silaqui', 'Theirastra', 'Thia', 'Vadania', 'Valanthe', 'Xanaphia']
                }
            },
            'LastNames': ['Amakiir', 'Amastacia', 'Galanodel', 'Holimion', 'Ilphelkiir', 'Liadon', 'Meliamne', 'Naïlo', 'Siannodel', 'Xiloscient']
        },

        'Gnome': {
            'statBonus': {
                'Intelligence': 2
            },

            'Gender': {
                'Male': {
                    'FirstNames': ['Alston', 'Alvyn', 'Boddynock', 'Brocc', 'Burgell', 'Dimble', 'Eldon', 'Erky', 'Fonkin', 'Frug', 'Gerbo', 'Gimble', 'Glim', 'Jebeddo', 'Kellen', 'Namfoodle', 'Orryn', 'Roondar', 'Seebo', 'Sindri', 'Warryn', 'Wrenn', 'Zook']
                },
                'Female': {
                    'FirstNames': ['Bimpnottin', 'Breena', 'Caramip', 'Carlin', 'Donella', 'Duvamil', 'Ella', 'Ellyjobell', 'Ellywick', 'Lilli', 'Loopmottin', 'Lorilla', 'Mardnab', 'Nissa', 'Nyx', 'Oda', 'Orla', 'Roywyn', 'Shamil', 'Tana', 'Waywocket', 'Zanna']
                }
            },
            'LastNames': ['Beren', 'Daergel', 'Folkor', 'Garrick', 'Nackle', 'Murnig', 'Ningel', 'Raulnor', 'Scheppen', 'Timbers', 'Turen']
        },

        'Half-Elf': {
            'statBonus': {
                'Charisma': 2
                //+1 to two other random stats
            },

            'Gender': {
                'Male': {
                    'FirstNames': ['Adran', 'Aelar', 'Aramil', 'Arannis', 'Aust', 'Beiro', 'Berrian', 'Carric', 'Enialis', 'Erdan', 'Erevan', 'Galinndan', 'Hadarai', 'Heian', 'Himo', 'Immeral', 'Ivellios', 'Laucian', 'Mindartis', 'Paelias', 'Peren', 'Quarion', 'Riardon', 'Rolen', 'Soveliss', 'Thamior', 'Tharivol', 'Theren', 'Varis', 'Archie', 'Milo', 'Asher', 'Jasper', 'Silas', 'Theodore', 'Atticus', 'Jack', 'Aarav', 'Finn', 'Oliver', 'Felix', 'Henry', 'Wyatt', 'Aryan', 'Leo', 'Oscar', 'Levi', 'Ethan', 'James', 'Julian', 'Arthur', 'Ezra', 'Theo', 'Eli', 'Aaron', 'Liam', 'Matthew']
                },
                'Female': {
                    'FirstNames': ['Adrie', 'Althaea', 'Anastrianna', 'Andraste', 'Antinua', 'Bethrynna', 'Birel', 'Caelynn', 'Drusilia', 'Enna', 'Felosial', 'Ielenia', 'Jelenneth', 'Keyleth', 'Leshanna', 'Lia', 'Meriele', 'Mialee', 'Naivara', 'Quelenna', 'Quillathe', 'Sariel', 'Shanairra', 'Shava', 'Silaqui', 'Theirastra', 'Thia', 'Vadania', 'Valanthe', 'Xanaphia', 'Isla', 'Olivia', 'Aurora', 'Ada', 'Charlotte', 'Amara', 'Maeve', 'Cora', 'Amelia', 'Posie', 'Luna', 'Ophelia', 'Ava', 'Rose', 'Eleanor', 'Genevieve', 'Alice', 'Elodie', 'Lucy', 'Ivy', 'Evelyn', 'Astrid', 'Freya', 'Anna', 'Iris', 'Mia', 'Violet']
                }
            },
            'LastNames': ['Amakiir', 'Amastacia', 'Galanodel', 'Holimion', 'Ilphelkiir', 'Liadon', 'Meliamne', 'Naïlo', 'Siannodel', 'Xiloscient', 'Agosto', 'Astorio', 'Calabra', 'Domine', 'Falone', 'Ankhalab', 'Anskuld', 'Fezim', 'Hahpet', 'Nathandem', 'Sepret', 'Uuthrakt', 'Brightwood', 'Helder', 'Hornraven', 'Lackman', 'Stormwind', 'Dundragon', 'Evenwood', 'Greycastle']
        },

        'Halfling': {
            'statBonus': {
                'Dexterity': 2
            },

            'Gender': {
                'Male': {
                    'FirstNames': ['Alton', 'Ander, Cade', 'Corrin', 'Eldon', 'Errich', 'Finnan', 'Garret', 'Lindal', 'Lyle', 'Merric', 'Milo', 'Osborn', 'Perrin', 'Reed', 'Roscoe', 'Wellby']
                },
                'Female': {
                    'FirstNames': ['Andry', 'Bree', 'Callie', 'Cora', 'Euphemia', 'Jillian', 'Kithri', 'Lavinia', 'Lidda', 'Merla', 'Nedda', 'Paela', 'Portia', 'Seraphina', 'Shaena', 'Trym', 'Vani', 'Verna']
                }
            },
            'LastNames': ['Brushgather', 'Goodbarrel', 'Greenbottle', 'High-hill', 'Hilltopple', 'Leagallow', 'Tealeaf', 'Thorngage', 'Tosscobble', 'Underbough']
        },

        'Half-Orc': {
            'statBonus': {
                'Strength': 2,
                'Constitution': 1
            },

            'Gender': {

                'Male': {
                    'FirstNames': ['Dench', 'Feng', 'Gell', 'Henk', 'Holg', 'Imsh', 'Keth', 'Krusk', 'Mhurren', 'Ront', 'Shump', 'Thokk']
                },
                'Female': {
                    'FirstNames': ['Baggi', 'Emen', 'Engong', 'Kansif', 'Myev', 'Neega', 'Ovak', 'Ownka', 'Shautha', 'Sutha', 'Vola', 'Volen', 'Yevelda']
                }
            },
        },

        'Human': {
            'statBonus': {
                'Strength': 1,
                'Dexterity': 1,
                'Constitution': 1,
                'Intelligence': 1,
                'Wisdom': 1,
                'Charisma': 1
            },

            'Gender': {
                'Male': {
                    'FirstNames': ['Archie', 'Milo', 'Asher', 'Jasper', 'Silas', 'Theodore', 'Atticus', 'Jack', 'Aarav', 'Finn', 'Oliver', 'Felix', 'Henry', 'Wyatt', 'Aryan', 'Leo', 'Oscar', 'Levi', 'Ethan', 'James', 'Julian', 'Arthur', 'Ezra', 'Theo', 'Eli', 'Aaron', 'Liam', 'Matthew']
                },
                'Female': {
                    'FirstNames': ['Isla', 'Olivia', 'Aurora', 'Ada', 'Charlotte', 'Amara', 'Maeve', 'Cora', 'Amelia', 'Posie', 'Luna', 'Ophelia', 'Ava', 'Rose', 'Eleanor', 'Genevieve', 'Alice', 'Elodie', 'Lucy', 'Ivy', 'Evelyn', 'Astrid', 'Freya', 'Anna', 'Iris', 'Mia', 'Violet']
                }
            },
            'LastNames': ['Agosto', 'Astorio', 'Calabra', 'Domine', 'Falone', 'Ankhalab', 'Anskuld', 'Fezim', 'Hahpet', 'Nathandem', 'Sepret', 'Uuthrakt', 'Brightwood', 'Helder', 'Hornraven', 'Lackman', 'Stormwind', 'Dundragon', 'Evenwood', 'Greycastle']
        },

        'Tiefling': {
            'statBonus': {
                'Charisma': 2,
                'Intelligence': 1
            },

            'Gender': {
                'Male': {
                    'FirstNames': ['Akmenos', 'Amnon', 'Barakas', 'Damakos', 'Ekemon', 'Iados', 'Kairon', 'Leucis', 'Melech', 'Mordai', 'Morthos', 'Pelaios', 'Skamos', 'Therai']
                },
                'Female': {
                    'FirstNames': ['Akta', 'Anakis', 'Bryseis', 'Criella', 'Damaia', 'Ea', 'Kallista', 'Lerissa', 'Makaria', 'Nemeia', 'Orianna', 'Phelaia', 'Rieta']
                }
            },
        }
    }
}



    // 'races': ['Dragonborn', 'Dwarf', 'Elf', 'Gnome', 'Half-Elf', 'Halfling', 'Half-Orc', 'Human', 'Tiefling'],






    // 'DragonbornMaleFirstName': ['Arjhan', 'Balasar', 'Bharash', 'Donaar', 'Ghesh', 'Heskan', 'Kriv', 'Medrash', 'Mehen', 'Nadarr', 'Pandjed', 'Patrin', 'Rhogar', 'Shamash', 'Shedinn', 'Tarhun', 'Torinn'],

    // 'DragonbornFemaleFirstName': ['Akra', 'Biri', 'Daar', 'Farideh', 'Harann', 'Havilar', 'Jheri', 'Kava', 'Korinn', 'Mishann', 'Nala', 'Perra', 'Raiann', 'Sora', 'Surina', 'Thava', 'Uadjit'],

    // 'DragonbornLastName' : ['Clethtinthiallor', 'Daardendrian', 'Delmirev', 'Drachedandion', 'Fenkenkabradon', 'Kepeshkmolik', 'Kerrhylon', 'Kimbatuul', 'Linxakasendalor', 'Myastan', 'Nemmonis', 'Norixius', 'Ophinshtalajiir', 'Prexijandilin', 'Shestendeliath', 'Turnuroth', 'Verthisathurgiesh', 'Yarjerit'],

    // 'DwarfMaleFirstName': ['Adrik', 'Alberich', 'Baern', 'Barendd', 'Brottor', 'Bruenor', 'Dain', 'Darrak', 'Delg', 'Eberk', 'Einkil', 'Fargrim', 'Flint', 'Gardain', 'Harbek', 'Kildrak', 'Morgran', 'Orsik', 'Oskar', 'Rangrim', 'Rurik', 'Taklinn', 'Thoradin', 'Thorin', 'Tordek', 'Traubon', 'Travok', 'Ulfgar', 'Veit', 'Vondal'],

    // 'DwarfFemaleFirstName': ['Amber', 'Artin', 'Audhild', 'Bardryn', 'Dagnal', 'Diesa', 'Eldeth', 'Falkrunn', 'Finellen', 'Gunnloda', 'Gurdis', 'Helja', 'Hlin', 'Kathra', 'Kristryd', 'Ilde', 'Liftrasa', 'Mardred', 'Riswynn', 'Sannl', 'Torbera', 'Torgga','Vistra'],

    // 'DwarfLastName': ['Balderk', 'Battlehammer', 'Brawnanvil', 'Dankil', 'Fireforge', 'Frostbeard', 'Gorunn', 'Holderhek', 'Ironfist', 'Loderr', 'Lutgehr', 'Rumnaheim', 'Strakeln', 'Torunn', 'Ungart'],

    // 'ElfMaleFirstName': ['Adran', 'Aelar', 'Aramil', 'Arannis', 'Aust', 'Beiro', 'Berrian', 'Carric', 'Enialis', 'Erdan', 'Erevan', 'Galinndan', 'Hadarai', 'Heian', 'Himo', 'Immeral', 'Ivellios', 'Laucian', 'Mindartis', 'Paelias', 'Peren', 'Quarion', 'Riardon', 'Rolen', 'Soveliss', 'Thamior', 'Tharivol', 'Theren', 'Varis'],

    // 'ElfFemaleFirstName': ['Adrie', 'Althaea', 'Anastrianna', 'Andraste', 'Antinua', 'Bethrynna', 'Birel', 'Caelynn', 'Drusilia', 'Enna', 'Felosial', 'Ielenia', 'Jelenneth', 'Keyleth', 'Leshanna', 'Lia', 'Meriele', 'Mialee', 'Naivara', 'Quelenna', 'Quillathe', 'Sariel', 'Shanairra', 'Shava', 'Silaqui', 'Theirastra', 'Thia', 'Vadania', 'Valanthe', 'Xanaphia'],

    // 'ElfLastName': ['Amakiir', 'Amastacia', 'Galanodel', 'Holimion', 'Ilphelkiir', 'Liadon', 'Meliamne', 'Naïlo', 'Siannodel', 'Xiloscient'],

    // 'GnomeMaleFirstName': ['Alston', 'Alvyn', 'Boddynock', 'Brocc', 'Burgell', 'Dimble', 'Eldon', 'Erky', 'Fonkin', 'Frug', 'Gerbo', 'Gimble', 'Glim', 'Jebeddo', 'Kellen', 'Namfoodle', 'Orryn', 'Roondar', 'Seebo', 'Sindri', 'Warryn', 'Wrenn', 'Zook'],

    // 'GnomeFemaleFirstName': ['Bimpnottin', 'Breena', 'Caramip', 'Carlin', 'Donella', 'Duvamil', 'Ella', 'Ellyjobell', 'Ellywick', 'Lilli', 'Loopmottin', 'Lorilla', 'Mardnab', 'Nissa', 'Nyx', 'Oda', 'Orla', 'Roywyn', 'Shamil', 'Tana', 'Waywocket', 'Zanna'], 

    // 'GnomeLastName': ['Beren', 'Daergel', 'Folkor', 'Garrick', 'Nackle', 'Murnig', 'Ningel', 'Raulnor', 'Scheppen', 'Timbers', 'Turen'],


    // //half-elf uses elf or human names


    // 'HalflingMaleFirstName': ['Alton', 'Ander, Cade', 'Corrin', 'Eldon', 'Errich', 'Finnan', 'Garret', 'Lindal', 'Lyle', 'Merric', 'Milo', 'Osborn', 'Perrin', 'Reed', 'Roscoe', 'Wellby'],

    // 'HalflingFemaleFirstName': ['Andry', 'Bree', 'Callie', 'Cora', 'Euphemia', 'Jillian', 'Kithri', 'Lavinia', 'Lidda', 'Merla', 'Nedda', 'Paela', 'Portia', 'Seraphina', 'Shaena', 'Trym', 'Vani', 'Verna'],

    // 'HalflingLastName': ['Brushgather', 'Goodbarrel', 'Greenbottle', 'High-hill', 'Hilltopple', 'Leagallow', 'Tealeaf', 'Thorngage', 'Tosscobble', 'Underbough'],

    // 'Half-OrcMaleFirstName': ['Dench', 'Feng', 'Gell', 'Henk', 'Holg', 'Imsh', 'Keth', 'Krusk', 'Mhurren', 'Ront', 'Shump', 'Thokk'],

    // 'Half-OrcFemaleFirstName': ['Baggi', 'Emen', 'Engong', 'Kansif', 'Myev', 'Neega', 'Ovak', 'Ownka', 'Shautha', 'Sutha', 'Vola', 'Volen', 'Yevelda'],

    // 'HumanMaleFirstName': ['Archie', 'Milo', 'Asher', 'Jasper', 'Silas', 'Theodore', 'Atticus', 'Jack', 'Aarav', 'Finn', 'Oliver', 'Felix', 'Henry', 'Wyatt', 'Aryan', 'Leo', 'Oscar', 'Levi', 'Ethan', 'James', 'Julian', 'Arthur', 'Ezra', 'Theo', 'Eli', 'Aaron', 'Liam', 'Matthew'],

    // 'HumanFemaleFirstName': ['Isla', 'Olivia', 'Aurora', 'Ada', 'Charlotte', 'Amara', 'Maeve', 'Cora', 'Amelia', 'Posie', 'Luna', 'Ophelia', 'Ava', 'Rose', 'Eleanor', 'Genevieve', 'Alice', 'Elodie', 'Lucy', 'Ivy', 'Evelyn', 'Astrid', 'Freya', 'Anna', 'Iris', 'Mia', 'Violet'],

    // 'HumanLastName': ['Agosto', 'Astorio', 'Calabra', 'Domine', 'Falone', 'Ankhalab', 'Anskuld', 'Fezim', 'Hahpet', 'Nathandem', 'Sepret', 'Uuthrakt', 'Brightwood', 'Helder', 'Hornraven', 'Lackman', 'Stormwind', 'Dundragon', 'Evenwood', 'Greycastle'],

    // 'TieflingMaleFirstName': ['Akmenos', 'Amnon', 'Barakas', 'Damakos', 'Ekemon', 'Iados', 'Kairon', 'Leucis', 'Melech', 'Mordai', 'Morthos', 'Pelaios', 'Skamos', 'Therai'],

    // 'TieflingFemaleFirstName': ['Akta', 'Anakis', 'Bryseis', 'Criella', 'Damaia', 'Ea', 'Kallista', 'Lerissa', 'Makaria', 'Nemeia', 'Orianna', 'Phelaia', 'Rieta']







//}