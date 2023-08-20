const races = ['BHR', 'SAU', 'AUS', 'AZE', 'MIA', 'MON', 'ESP', 'CAN', 'AUT', 'GBR', 'HUN', 'BEL', 'NED', 'ITA', 'SIN', 'JPN', 'QAT', 'USA', 'MXC', 'SAP', 'LVG', 'ABU']
const sprintRaces = new Set()
sprintRaces.add('AZE')
sprintRaces.add('AUT')
sprintRaces.add('BEL')
sprintRaces.add('QAT')
sprintRaces.add('USA')
sprintRaces.add('SAP')

const results = {
    'BHR': {
        standings: ['VER', 'PER', 'ALO', 'SAI', 'HAM', 'STR', 'RUS', 'BOT', 'GAS', 'ALB', 'TSU', 'SAR', 'MAG', 'DEV', 'HUL', 'ZHO', 'NOR'],
        dnf: ['OCO', 'LEC', 'PIA'],
        fastest: 'ZHO',
    },
    'SAU': {
        standings: ['PER', 'VER', 'ALO', 'RUS', 'HAM', 'SAI', 'LEC', 'OCO', 'GAS', 'MAG', 'TSU', 'HUL', 'ZHO', 'DEV', 'PIA', 'SAR', 'NOR', 'BOT'],
        dnf: ['ALB', 'STR'],
        fastest: 'VER',
    },
    'AUS': {
        standings: ['VER', 'HAM', 'ALO', 'STR', 'PER', 'NOR', 'HUL', 'PIA', 'ZHO', 'TSU', 'BOT', 'SAI'],
        dnf: ['GAS', 'OCO', 'DEV', 'SAR', 'MAG', 'RUS', 'ALB', 'LEC'],
        fastest: 'PER',
    },
    'AZE': {
        sprint: ['PER', 'LEC', 'VER', 'RUS', 'SAI', 'ALO', 'HAM', 'STR', 'ALB', 'PIA', 'MAG', 'ZHO', 'GAS', 'DEV', 'HUL', 'BOT', 'NOR', 'OCO'],
        sprintdnf: ['TSU'],
        standings: ['PER', 'VER', 'LEC', 'ALO', 'SAI', 'HAM', 'STR', 'RUS', 'NOR', 'TSU', 'PIA', 'ALB', 'MAG', 'GAS', 'OCO', 'SAR', 'HUL', 'BOT'],
        dnf: ['ZHO', 'DEV'],
        fastest: 'RUS',
    },
    'MIA': {
        standings: ['VER', 'PER', 'ALO', 'RUS', 'SAI', 'HAM', 'LEC', 'GAS', 'OCO', 'MAG', 'TSU', 'STR', 'BOT', 'ALB', 'HUL', 'ZHO', 'NOR', 'DEV', 'PIA', 'SAR'],
        dnf: [],
        fastest: 'VER',
    },
    'MON': {
        standings: ['VER', 'ALO', 'OCO', 'HAM', 'RUS', 'LEC', 'GAS', 'SAI', 'NOR', 'PIA', 'BOT', 'DEV', 'ZHO', 'ALB', 'TSU', 'PER', 'HUL', 'SAR'],
        dnf: ['MAG', 'STR'],
        fastest: 'HAM',
    },
    'ESP': {
        standings: ['VER', 'HAM', 'RUS', 'PER', 'SAI', 'STR', 'ALO', 'OCO', 'ZHO', 'GAS', 'LEC', 'TSU', 'PIA', 'DEV', 'HUL', 'ALB', 'NOR', 'MAG', 'BOT', 'SAR'],
        dnf: [],
        fastest: 'VER',
    },
    'CAN': {
        standings: ['VER', 'ALO', 'HAM', 'LEC', 'SAI', 'PER', 'ALB', 'OCO', 'STR', 'BOT', 'PIA', 'GAS', 'NOR', 'TSU', 'HUL', 'ZHO', 'MAG', 'DEV'],
        dnf: ['RUS', 'SAR'],
        fastest: 'PER',
    },
    'AUT': {
        sprint: ['VER', 'PER', 'SAI', 'STR', 'ALO', 'HUL', 'OCO', 'RUS', 'NOR', 'HAM', 'PIA', 'LEC', 'ALB', 'MAG', 'GAS', 'TSU', 'DEV', 'SAR', 'ZHO', 'BOT'],
        sprintdnf: [],
        standings: ['VER', 'LEC', 'PER', 'NOR', 'ALO', 'SAI', 'RUS', 'HAM', 'STR', 'GAS', 'ALB', 'ZHO', 'SAR', 'OCO', 'BOT', 'PIA', 'DEV', 'MAG', 'TSU'],
        dnf: ['HUL'],
        fastest: 'VER',
    },
    'GBR': {
        standings: ['VER', 'NOR', 'HAM', 'PIA', 'RUS', 'PER', 'ALO', 'ALB', 'LEC', 'SAI', 'SAR', 'BOT', 'HUL', 'STR', 'ZHO', 'TSU', 'DEV'],
        dnf: ['GAS', 'MAG', 'OCO'],
        fastest: 'VER',
    },
    'HUN': {
        standings: ['VER', 'NOR', 'PER', 'HAM', 'PIA', 'RUS', 'LEC', 'SAI', 'ALO', 'STR', 'ALB', 'BOT', 'RIC', 'HUL', 'TSU', 'ZHO', 'MAG'],
        dnf: ['SAR', 'OCO', 'GAS'],
        fastest: 'VER',
    },
    'BEL': {
        sprint: ['VER', 'PIA', 'GAS', 'SAI', 'LEC', 'NOR', 'HAM', 'RUS', 'OCO', 'RIC', 'STR', 'ALB', 'BOT', 'MAG', 'ZHO', 'SAR', 'HUL', 'TSU'],
        sprintdnf: ['PER', 'ALO'],
        standings: ['VER', 'PER', 'LEC', 'HAM', 'ALO', 'RUS', 'NOR', 'OCO', 'STR', 'TSU', 'GAS', 'BOT', 'ZHO', 'ALB', 'MAG', 'RIC', 'SAR', 'HUL'],
        dnf: ['SAI', 'PIA'],
        fastest: 'HAM',
    },
}

const originalResults = {}
for (const key in results) {
    originalResults[key] = {}
    for (const key2 in results[key]) {
        if (Array.isArray(results[key][key2])) {
            originalResults[key][key2] = [...results[key][key2]]
        }
        else {
            originalResults[key][key2] = results[key][key2]
        }
    }
}

const points = [25, 18, 15, 12, 10, 8, 6, 4, 2, 1]
const sprintPoints = [8, 7, 6, 5, 4, 3, 2, 1]

const currDrivers = new Set()
currDrivers.add('ZHO')
currDrivers.add('BOT')
currDrivers.add('RIC')
currDrivers.add('TSU')
currDrivers.add('GAS')
currDrivers.add('OCO')
currDrivers.add('ALO')
currDrivers.add('STR')
currDrivers.add('LEC')
currDrivers.add('SAI')
currDrivers.add('MAG')
currDrivers.add('HUL')
currDrivers.add('PIA')
currDrivers.add('NOR')
currDrivers.add('HAM')
currDrivers.add('RUS')
currDrivers.add('VER')
currDrivers.add('PER')
currDrivers.add('ALB')
currDrivers.add('SAR')

const drivers = {
    'ZHO': {
        name: 'Zhou Guanyu',
        team: 'Alfa Romeo',
        points: 0,
        placements: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        raceResults: {},
    },
    'BOT': {
        name: 'Valtteri Bottas',
        team: 'Alfa Romeo',
        points: 0,
        placements: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        raceResults: {},
    },
    'DEV': {
        name: 'Nyck de Vries',
        team: 'AlphaTauri',
        points: 0,
        placements: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        raceResults: {},
    },
    'RIC': {
        name: 'Daniel Ricciardo',
        team: 'AlphaTauri',
        points: 0,
        placements: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        raceResults: {},
    },
    'TSU': {
        name: 'Yuki Tsunoda',
        team: 'AlphaTauri',
        points: 0,
        placements: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        raceResults: {},
    },
    'GAS': {
        name: 'Pierre Gasly',
        team: 'Alpine',
        points: 0,
        placements: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        raceResults: {},
    },
    'OCO': {
        name: 'Esteban Ocon',
        team: 'Alpine',
        points: 0,
        placements: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        raceResults: {},
    },
    'ALO': {
        name: 'Fernando Alonso',
        team: 'Aston Martin',
        points: 0,
        placements: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        raceResults: {},
    },
    'STR': {
        name: 'Lance Stroll',
        team: 'Aston Martin',
        points: 0,
        placements: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        raceResults: {},
    },
    'LEC': {
        name: 'Charles Leclerc',
        team: 'Ferrari',
        points: 0,
        placements: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        raceResults: {},
    },
    'SAI': {
        name: 'Carlos Sainz Jr.',
        team: 'Ferrari',
        points: 0,
        placements: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        raceResults: {},
    },
    'MAG': {
        name: 'Kevin Magnussen',
        team: 'Haas',
        points: 0,
        placements: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        raceResults: {},
    },
    'HUL': {
        name: 'Nico Hulkenberg',
        team: 'Haas',
        points: 0,
        placements: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        raceResults: {},
    },
    'NOR': {
        name: 'Lando Norris',
        team: 'McLaren',
        points: 0,
        placements: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        raceResults: {},
    },
    'PIA': {
        name: 'Oscar Piastri',
        team: 'McLaren',
        points: 0,
        placements: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        raceResults: {},
    },
    'HAM': {
        name: 'Lewis Hamilton',
        team: 'Mercedes',
        points: 0,
        placements: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        raceResults: {},
    },
    'RUS': {
        name: 'George Russell',
        team: 'Mercedes',
        points: 0,
        placements: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        raceResults: {},
    },
    'VER': {
        name: 'Max Verstappen',
        team: 'Red Bull',
        points: 0,
        placements: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        raceResults: {},
    },
    'PER': {
        name: 'Sergio Perez',
        team: 'Red Bull',
        points: 0,
        placements: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        raceResults: {},
    },
    'SAR': {
        name: 'Logan Sargeant',
        team: 'Williams',
        points: 0,
        placements: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        raceResults: {},
    },
    'ALB': {
        name: 'Alexander Albon',
        team: 'Williams',
        points: 0,
        placements: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        raceResults: {},
    },
}

const teams = {
    'Alfa Romeo': {
        color: '#C92D4B',
        points: 0,
        placements: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        raceResults: {},
    },
    'AlphaTauri': {
        color: '#5E8FAA',
        points: 0,
        placements: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        raceResults: {},
    },
    'Alpine': {
        color: '#2293D1',
        points: 0,
        placements: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        raceResults: {},
    },
    'Aston Martin': {
        color: '#358C75',
        points: 0,
        placements: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        raceResults: {},
    },
    'Ferrari': {
        color: '#F91536',
        points: 0,
        placements: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        raceResults: {},
    },
    'Haas': {
        color: '#B6BABD',
        points: 0,
        placements: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        raceResults: {},
    },
    'McLaren': {
        color: '#F58020',
        points: 0,
        placements: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        raceResults: {},
    },
    'Mercedes': {
        color: '#6CD3BF',
        points: 0,
        placements: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        raceResults: {},
    },
    'Red Bull': {
        color: '#3671C6',
        points: 0,
        placements: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        raceResults: {},
    },
    'Williams': {
        color: '#37BEDD',
        points: 0,
        placements: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        raceResults: {},
    },
}

const originalDrivers = {
    'ZHO': {
        name: 'Zhou Guanyu',
        team: 'Alfa Romeo',
        points: 0,
        placements: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        raceResults: {},
    },
    'BOT': {
        name: 'Valtteri Bottas',
        team: 'Alfa Romeo',
        points: 0,
        placements: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        raceResults: {},
    },
    'DEV': {
        name: 'Nyck de Vries',
        team: 'AlphaTauri',
        points: 0,
        placements: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        raceResults: {},
    },
    'RIC': {
        name: 'Daniel Ricciardo',
        team: 'AlphaTauri',
        points: 0,
        placements: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        raceResults: {},
    },
    'TSU': {
        name: 'Yuki Tsunoda',
        team: 'AlphaTauri',
        points: 0,
        placements: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        raceResults: {},
    },
    'GAS': {
        name: 'Pierre Gasly',
        team: 'Alpine',
        points: 0,
        placements: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        raceResults: {},
    },
    'OCO': {
        name: 'Esteban Ocon',
        team: 'Alpine',
        points: 0,
        placements: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        raceResults: {},
    },
    'ALO': {
        name: 'Fernando Alonso',
        team: 'Aston Martin',
        points: 0,
        placements: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        raceResults: {},
    },
    'STR': {
        name: 'Lance Stroll',
        team: 'Aston Martin',
        points: 0,
        placements: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        raceResults: {},
    },
    'LEC': {
        name: 'Charles Leclerc',
        team: 'Ferrari',
        points: 0,
        placements: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        raceResults: {},
    },
    'SAI': {
        name: 'Carlos Sainz Jr.',
        team: 'Ferrari',
        points: 0,
        placements: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        raceResults: {},
    },
    'MAG': {
        name: 'Kevin Magnussen',
        team: 'Haas',
        points: 0,
        placements: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        raceResults: {},
    },
    'HUL': {
        name: 'Nico Hulkenberg',
        team: 'Haas',
        points: 0,
        placements: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        raceResults: {},
    },
    'NOR': {
        name: 'Lando Norris',
        team: 'McLaren',
        points: 0,
        placements: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        raceResults: {},
    },
    'PIA': {
        name: 'Oscar Piastri',
        team: 'McLaren',
        points: 0,
        placements: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        raceResults: {},
    },
    'HAM': {
        name: 'Lewis Hamilton',
        team: 'Mercedes',
        points: 0,
        placements: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        raceResults: {},
    },
    'RUS': {
        name: 'George Russell',
        team: 'Mercedes',
        points: 0,
        placements: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        raceResults: {},
    },
    'VER': {
        name: 'Max Verstappen',
        team: 'Red Bull',
        points: 0,
        placements: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        raceResults: {},
    },
    'PER': {
        name: 'Sergio Perez',
        team: 'Red Bull',
        points: 0,
        placements: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        raceResults: {},
    },
    'SAR': {
        name: 'Logan Sargeant',
        team: 'Williams',
        points: 0,
        placements: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        raceResults: {},
    },
    'ALB': {
        name: 'Alexander Albon',
        team: 'Williams',
        points: 0,
        placements: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        raceResults: {},
    },
}

const originalTeams = {
    'Alfa Romeo': {
        color: '#C92D4B',
        points: 0,
        placements: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        raceResults: {},
    },
    'AlphaTauri': {
        color: '#5E8FAA',
        points: 0,
        placements: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        raceResults: {},
    },
    'Alpine': {
        color: '#2293D1',
        points: 0,
        placements: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        raceResults: {},
    },
    'Aston Martin': {
        color: '#358C75',
        points: 0,
        placements: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        raceResults: {},
    },
    'Ferrari': {
        color: '#F91536',
        points: 0,
        placements: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        raceResults: {},
    },
    'Haas': {
        color: '#B6BABD',
        points: 0,
        placements: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        raceResults: {},
    },
    'McLaren': {
        color: '#F58020',
        points: 0,
        placements: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        raceResults: {},
    },
    'Mercedes': {
        color: '#6CD3BF',
        points: 0,
        placements: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        raceResults: {},
    },
    'Red Bull': {
        color: '#3671C6',
        points: 0,
        placements: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        raceResults: {},
    },
    'Williams': {
        color: '#37BEDD',
        points: 0,
        placements: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        raceResults: {},
    },
}

for (const race in results) {
    const fastestLap = results[race].fastest

    for (let j = 0; j < results[race].standings.length; j++) {
        if (j < 10 && results[race].standings[j] === fastestLap) {
            drivers[results[race].standings[j]].points += 1
            teams[drivers[results[race].standings[j]].team].points += 1

            originalDrivers[results[race].standings[j]].points += 1
            originalTeams[drivers[results[race].standings[j]].team].points += 1
        }

        drivers[results[race].standings[j]].placements[j] += 1
        teams[drivers[results[race].standings[j]].team].placements[j] += 1

        originalDrivers[results[race].standings[j]].placements[j] += 1
        originalTeams[drivers[results[race].standings[j]].team].placements[j] += 1

        if (j < points.length) {
            drivers[results[race].standings[j]].points += points[j]
            teams[drivers[results[race].standings[j]].team].points += points[j]

            originalDrivers[results[race].standings[j]].points += points[j]
            originalTeams[drivers[results[race].standings[j]].team].points += points[j]
        }

        drivers[results[race].standings[j]].raceResults[race] = {
            placement: j+1,
            fastestLap: results[race].standings[j] === fastestLap ? true : false,
        }

        // add team results
        if (teams[drivers[results[race].standings[j]].team].raceResults[race] === undefined) {
            teams[drivers[results[race].standings[j]].team].raceResults[race] = {}
        }
        teams[drivers[results[race].standings[j]].team].raceResults[race][results[race].standings[j]] = {
            placement: j+1,
            fastestLap: results[race].standings[j] === fastestLap ? true : false,
        }

        originalDrivers[results[race].standings[j]].raceResults[race] = {
            placement: j+1,
            fastestLap: results[race].standings[j] === fastestLap ? true : false,
        }

        if (originalTeams[drivers[results[race].standings[j]].team].raceResults[race] === undefined) {
            originalTeams[drivers[results[race].standings[j]].team].raceResults[race] = {}
        }
        originalTeams[drivers[results[race].standings[j]].team].raceResults[race][results[race].standings[j]] = {
            placement: j+1,
            fastestLap: results[race].standings[j] === fastestLap ? true : false,
        }
    }

    for (let j = 0; j < results[race].dnf.length; j++) {
        drivers[results[race].dnf[j]].placements[20] += 1
        teams[drivers[results[race].dnf[j]].team].placements[20] += 1

        originalDrivers[results[race].dnf[j]].placements[20] += 1
        originalTeams[drivers[results[race].dnf[j]].team].placements[20] += 1

        drivers[results[race].dnf[j]].raceResults[race] = {
            placement: 21,
            fastestLap: results[race].dnf[j] === fastestLap ? true : false,
        }
        // add team results
        if (teams[drivers[results[race].dnf[j]].team].raceResults[race] === undefined) {
            teams[drivers[results[race].dnf[j]].team].raceResults[race] = {}
        }
        teams[drivers[results[race].dnf[j]].team].raceResults[race][results[race].dnf[j]] = {
            placement: 21,
            fastestLap: results[race].dnf[j] === fastestLap ? true : false,
        }

        originalDrivers[results[race].dnf[j]].raceResults[race] = {
            placement: 21,
            fastestLap: results[race].dnf[j] === fastestLap ? true : false,
        }
        if (originalTeams[drivers[results[race].dnf[j]].team].raceResults[race] === undefined) {
            originalTeams[drivers[results[race].dnf[j]].team].raceResults[race] = {}
        }
        originalTeams[drivers[results[race].dnf[j]].team].raceResults[race][results[race].dnf[j]] = {
            placement: 21,
            fastestLap: results[race].dnf[j] === fastestLap ? true : false,
        }
    }

    if (results[race].sprint) {
        for (let j = 0; j < results[race].sprint.length; j++) {
            if (j < sprintPoints.length) {
                drivers[results[race].sprint[j]].points += sprintPoints[j]
                teams[drivers[results[race].sprint[j]].team].points += sprintPoints[j]

                originalDrivers[results[race].sprint[j]].points += sprintPoints[j]
                originalTeams[drivers[results[race].sprint[j]].team].points += sprintPoints[j]
            }

            drivers[results[race].sprint[j]].raceResults[race]["sprintResult"] = j+1
            //add team result
            teams[drivers[results[race].sprint[j]].team].raceResults[race][results[race].sprint[j]]["sprintResult"] = j+1

            originalDrivers[results[race].sprint[j]].raceResults[race]["sprintResult"] = j+1
            originalTeams[drivers[results[race].sprint[j]].team].raceResults[race][results[race].sprint[j]]["sprintResult"] = j+1
        }

        for (let j = 0; j < results[race].sprintdnf.length; j++) {
            drivers[results[race].sprintdnf[j]].raceResults[race]["sprintResult"] = 21
            // add team result
            teams[drivers[results[race].sprintdnf[j]].team].raceResults[race][results[race].sprintdnf[j]]["sprintResult"] = 21

            originalDrivers[results[race].sprintdnf[j]].raceResults[race]["sprintResult"] = 21
            originalTeams[drivers[results[race].sprintdnf[j]].team].raceResults[race][results[race].sprintdnf[j]]["sprintResult"] = 21
        }
    }
}

let scoreboard = []
for (const driver in drivers) {
    scoreboard.push({
        name: drivers[driver].name,
        abbreviation: driver,
        team: drivers[driver].team,
        points: drivers[driver].points,
        placements: drivers[driver].placements,
    })
}

scoreboard.sort(function(a, b) {
    if (a.points == b.points) {
        for (let i = 0; i < a.placements.length; i++) {
            if (a.placements[i] !== b.placements[i]) return b.placements[i] - a.placements[i]
        }
        return 0
    }
    else {
        return b.points - a.points
    }
})

let teamScoreboard = []
for (const team in teams) {
    teamScoreboard.push({
        name: team,
        points: teams[team].points,
        placements: teams[team].placements,
    })
}

teamScoreboard.sort(function(a, b) {
    if (a.points == b.points) {
        for (let i = 0; i < a.placements.length; i++) {
            if (a.placements[i] !== b.placements[i]) return b.placements[i] - a.placements[i]
        }
        return 0
    }
    else {
        return b.points - a.points
    }
})

// console.log(scoreboard)

// for (let i = 0; i < scoreboard.length; i++) {
//     console.log(`${i + 1}. ${scoreboard[i].name} - ${scoreboard[i].points}`)
// }

const allRaceContainer = document.createElement('div')
allRaceContainer.classList = "w-full flex flex-row relative overflow-x-scroll"
allRaceContainer.id = 'all_race_container'

for (let i = 0; i < races.length; i++) {
    const raceDiv = document.createElement('div')
    raceDiv.classList.add('px-2')
    raceDiv.id = `race${races[i]}_fullContainer`

    if (i >= Object.keys(results).length) {
        raceDiv.classList.add('bg-gray-500')
    }

    const raceNameDiv = document.createElement('div')
    raceNameDiv.classList.add('flex', 'flex-col', 'items-center')
    raceNameDiv.id = `race${races[i]}_name_container`
    const raceName = document.createElement('h2')
    raceName.innerHTML = races[i]
    const raceFlag = document.createElement('img')
    raceFlag.setAttribute('src', `flags/${races[i]}.svg`)
    raceFlag.setAttribute('width', '28.25')
    raceFlag.setAttribute('height', '21.29')

    raceNameDiv.appendChild(raceName)
    raceNameDiv.appendChild(raceFlag)

    raceDiv.appendChild(raceNameDiv)

    outerRaceDiv = document.createElement('div')
    outerRaceDiv.classList.add('flex', 'flex-row')

    const actualRaceDiv = document.createElement('div')
    actualRaceDiv.classList.add('flex', 'flex-col')

    if (sprintRaces.has(races[i])) {
        const actualSprintDiv = document.createElement('div')
        actualSprintDiv.classList.add('flex', 'flex-col')

        const sprintText = document.createElement('div')
        sprintText.innerHTML = 'Sprint'
        sprintText.id = `race${races[i]}sprint_raceText`
        sprintText.classList.add('font-bold', 'text-center')

        actualSprintDiv.appendChild(sprintText)

        const sprintStandingsContainer = document.createElement('div')
        sprintStandingsContainer.classList.add('flex', 'flex-row')

        sprintDriverContainer = document.createElement('div')
        sprintDriverContainer.id = `race${races[i]}sprint_container`

        sprintPlacementsContainer = document.createElement('div')
        sprintPlacementsContainer.classList.add('pr-1')

        let sprintPlacementCounter = 0

        if (results[races[i]] !== undefined) {
            for (let j = 0; j < 20; j++) {
                const sprintPlacementDiv = document.createElement('div')
                sprintPlacementDiv.classList.add('font-bold', 'text-center', `race${races[i]}sprint_placementClass`)
                sprintPlacementDiv.style.marginTop = '1px'
                sprintPlacementDiv.style.marginBottom = '1px'
                if (j < results[races[i]].sprint.length) {
                    sprintPlacementDiv.innerHTML = `${j + 1}`
                }
                else {
                    if (j === results[races[i]].sprint.length) {
                        const dnfDiv = document.createElement('div')
                        dnfDiv.classList.add('text-xs', 'font-bold', 'text-center', 'opacity-0')
                        dnfDiv.innerHTML = '-'
                        dnfDiv.id = `race${races[i]}sprint_place${sprintPlacementCounter}`
                        sprintPlacementCounter += 1
                        sprintPlacementsContainer.appendChild(dnfDiv)
                    }
                    sprintPlacementDiv.innerHTML = `-`
                }

                sprintPlacementDiv.id = `race${races[i]}sprint_place${sprintPlacementCounter}`
                sprintPlacementsContainer.appendChild(sprintPlacementDiv)
                sprintPlacementCounter += 1
            }
        }
        else {
            for (let j = 0; j < 20; j++) {
                const sprintPlacementDiv = document.createElement('div')
                sprintPlacementDiv.classList.add('font-bold', 'text-center', `race${races[i]}sprint_placementClass`)
                sprintPlacementDiv.style.marginTop = '1px'
                sprintPlacementDiv.style.marginBottom = '1px'
                sprintPlacementDiv.innerHTML = `${j + 1}`

                sprintPlacementDiv.id = `race${races[i]}sprint_place${sprintPlacementCounter}`
                sprintPlacementsContainer.appendChild(sprintPlacementDiv)
                sprintPlacementCounter += 1
            }

            const dnfDiv = document.createElement('div')
            dnfDiv.classList.add('text-xs', 'font-bold', 'text-center', 'opacity-0')
            dnfDiv.innerHTML = '-'
            dnfDiv.id = `race${races[i]}sprint_place${sprintPlacementCounter}`
            sprintPlacementCounter += 1
            sprintPlacementsContainer.appendChild(dnfDiv)
        }

        sprintStandingsContainer.appendChild(sprintPlacementsContainer)

        if (results[races[i]] !== undefined) {
            for (let j = 0; j < results[races[i]].sprint.length; j++) {
                const driverDiv = document.createElement('div')
                driverDiv.classList.add(`race${races[i]}sprint`, 'block', 'pl-1')
                driverDiv.style.borderLeft = `4px solid ${teams[drivers[results[races[i]].sprint[j]].team].color}`
                driverDiv.innerHTML = results[races[i]].sprint[j]

                sprintDriverContainer.appendChild(driverDiv)
            }

            const dnfText = document.createElement('div')
            dnfText.classList.add(`race${races[i]}sprint`, 'text-xs', 'font-bold', 'text-center')
            dnfText.id = `race${races[i]}sprint_dnfText`
            dnfText.innerHTML = 'DNFs'
            sprintDriverContainer.appendChild(dnfText)

            for (let j = 0; j < results[races[i]].sprintdnf.length; j++) {
                const driverDiv = document.createElement('div')
                driverDiv.classList.add(`race${races[i]}sprint`, 'block', 'pl-1')
                driverDiv.style.borderLeft = `4px solid ${teams[drivers[results[races[i]].sprintdnf[j]].team].color}`
                driverDiv.innerHTML = results[races[i]].sprintdnf[j]

                sprintDriverContainer.appendChild(driverDiv)
            }
        }
        else {
            for (let j = 0; j < scoreboard.length; j++) {
                if (currDrivers.has(scoreboard[j].abbreviation)) {
                    const driverDiv = document.createElement('div')
                    driverDiv.classList.add(`race${races[i]}sprint`, 'block', 'pl-1')
                    driverDiv.style.borderLeft = `4px solid ${teams[drivers[scoreboard[j].abbreviation].team].color}`
                    driverDiv.innerHTML = scoreboard[j].abbreviation

                    sprintDriverContainer.appendChild(driverDiv)
                }
            }

            const dnfText = document.createElement('div')
            dnfText.classList.add(`race${races[i]}sprint`, 'text-xs', 'font-bold', 'text-center')
            dnfText.id = `race${races[i]}sprint_dnfText`
            dnfText.innerHTML = 'DNFs'
            sprintDriverContainer.appendChild(dnfText)
        }

        sprintStandingsContainer.appendChild(sprintDriverContainer)
        actualSprintDiv.appendChild(sprintStandingsContainer)

        outerRaceDiv.appendChild(actualSprintDiv)
    }

    const raceText = document.createElement('div')
    raceText.innerHTML = 'Race'
    raceText.id = `race${races[i]}_raceText`
    raceText.classList.add('font-bold', 'text-center')

    actualRaceDiv.appendChild(raceText)

    const raceStandingsContainer = document.createElement('div')
    raceStandingsContainer.classList.add('flex', 'flex-row')

    const raceDriverContainer = document.createElement('div')
    raceDriverContainer.id = `race${races[i]}_container`

    raceFastestLapContainer = document.createElement('div')
    raceFastestLapContainer.style.width = '24px'

    racePlacementsContainer = document.createElement('div')
    racePlacementsContainer.classList.add('pr-1')

    let placementCounter = 0

    if (results[races[i]] !== undefined) {
        for (let j = 0; j < 20; j++) {
            const placementDiv = document.createElement('div')
            placementDiv.classList.add('font-bold', 'text-center', `race${races[i]}_placementClass`)
            placementDiv.style.marginTop = '1px'
            placementDiv.style.marginBottom = '1px'
            if (j < results[races[i]].standings.length) {
                placementDiv.innerHTML = `${j + 1}`
            }
            else {
                if (j === results[races[i]].standings.length) {
                    const dnfDiv = document.createElement('div')
                    dnfDiv.classList.add('text-xs', 'font-bold', 'text-center', 'opacity-0', `race${races[i]}_placementClass`)
                    dnfDiv.innerHTML = '-'
                    dnfDiv.id = `race${races[i]}_place${placementCounter}`
                    placementCounter += 1
                    racePlacementsContainer.appendChild(dnfDiv)
                }
                placementDiv.innerHTML = `-`
            }

            placementDiv.id = `race${races[i]}_place${placementCounter}`
            racePlacementsContainer.appendChild(placementDiv)
            placementCounter += 1
        }
        if (20 === results[races[i]].standings.length) {
            const dnfDiv = document.createElement('div')
            dnfDiv.classList.add('text-xs', 'font-bold', 'text-center', 'opacity-0', `race${races[i]}_placementClass`)
            dnfDiv.innerHTML = '-'
            dnfDiv.id = `race${races[i]}_place${placementCounter}`
            placementCounter += 1
            racePlacementsContainer.appendChild(dnfDiv)
        }
    }
    else {
        for (let j = 0; j < 20; j++) {
            const placementDiv = document.createElement('div')
            placementDiv.classList.add('font-bold', 'text-center', `race${races[i]}_placementClass`)
            placementDiv.style.marginTop = '1px'
            placementDiv.style.marginBottom = '1px'
            placementDiv.innerHTML = `${j + 1}`

            placementDiv.id = `race${races[i]}_place${placementCounter}`
            racePlacementsContainer.appendChild(placementDiv)
            placementCounter += 1
        }

        const dnfDiv = document.createElement('div')
        dnfDiv.classList.add('text-xs', 'font-bold', 'text-center', 'opacity-0', `race${races[i]}_placementClass`)
        dnfDiv.innerHTML = '-'
        dnfDiv.id = `race${races[i]}_place${placementCounter}`
        placementCounter += 1
        racePlacementsContainer.appendChild(dnfDiv)
    }

    raceStandingsContainer.appendChild(racePlacementsContainer)

    if (results[races[i]] !== undefined) {
        for (let j = 0; j < results[races[i]].standings.length; j++) {
            const driverDiv = document.createElement('div')
            driverDiv.classList.add(`race${races[i]}`, 'block', 'pl-1')
            driverDiv.style.borderLeft = `4px solid ${teams[drivers[results[races[i]].standings[j]].team].color}`
            driverDiv.innerHTML = results[races[i]].standings[j]

            raceDriverContainer.appendChild(driverDiv)

            const fastestLapImg = document.createElement('div')
            fastestLapImg.style.backgroundImage = 'url(fastest_lap.svg)'
            fastestLapImg.style.backgroundSize = 'contain'
            fastestLapImg.style.width = '24px'
            fastestLapImg.style.height = '24px'
            fastestLapImg.style.marginTop = '1px'
            fastestLapImg.style.marginBottom = '1px'
            fastestLapImg.classList.add('cursor-pointer', `race${races[i]}_fastestLap`)
            fastestLapImg.id = `race${races[i]}_fastestlap_place${j}`
            fastestLapImg.onclick = function() { changeFastestLap(`race${races[i]}`, j); }
            fastestLapImg.style.opacity = results[races[i]].standings[j] == results[races[i]].fastest ? '1' : '0.1'

            raceFastestLapContainer.appendChild(fastestLapImg)
        }

        const dnfText = document.createElement('div')
        dnfText.classList.add(`race${races[i]}`, 'text-xs', 'font-bold', 'text-center')
        dnfText.id = `race${races[i]}_dnfText`
        dnfText.innerHTML = 'DNFs'
        raceDriverContainer.appendChild(dnfText)

        const dnfFastestLapText = document.createElement('div')
        dnfFastestLapText.classList.add('text-xs', 'font-bold', 'text-center', `race${races[i]}_fastestLap`)
        dnfFastestLapText.style.opacity = '0'
        dnfFastestLapText.innerHTML = '-'
        dnfFastestLapText.id = `race${races[i]}_fastestlap_place${results[races[i]].standings.length}`
        dnfFastestLapText.onclick = function() { changeFastestLap(`race${races[i]}`, results[races[i]].standings.length); }
        raceFastestLapContainer.appendChild(dnfFastestLapText)

        for (let j = 0; j < results[races[i]].dnf.length; j++) {
            const driverDiv = document.createElement('div')
            driverDiv.classList.add(`race${races[i]}`, 'block', 'pl-1')
            driverDiv.style.borderLeft = `4px solid ${teams[drivers[results[races[i]].dnf[j]].team].color}`
            driverDiv.innerHTML = results[races[i]].dnf[j]

            raceDriverContainer.appendChild(driverDiv)

            const fastestLapImg = document.createElement('div')
            fastestLapImg.style.backgroundImage = 'url(fastest_lap.svg)'
            fastestLapImg.style.backgroundSize = 'contain'
            fastestLapImg.style.width = '24px'
            fastestLapImg.style.height = '24px'
            fastestLapImg.style.marginTop = '1px'
            fastestLapImg.style.marginBottom = '1px'
            fastestLapImg.classList.add('cursor-pointer', `race${races[i]}_fastestLap`)
            fastestLapImg.id = `race${races[i]}_fastestlap_place${j+results[races[i]].standings.length+1}`
            fastestLapImg.onclick = function() { changeFastestLap(`race${races[i]}`, j+results[races[i]].standings.length+1); }
            fastestLapImg.style.opacity = results[races[i]].dnf[j] == results[races[i]].fastest ? '1' : '0.1'

            raceFastestLapContainer.appendChild(fastestLapImg)
        }
    }
    else {
        for (let j = 0; j < scoreboard.length; j++) {
            if (currDrivers.has(scoreboard[j].abbreviation)) {
                const driverDiv = document.createElement('div')
                driverDiv.classList.add(`race${races[i]}`, 'block', 'pl-1')
                driverDiv.style.borderLeft = `4px solid ${teams[drivers[scoreboard[j].abbreviation].team].color}`
                driverDiv.innerHTML = scoreboard[j].abbreviation

                raceDriverContainer.appendChild(driverDiv)

                const fastestLapImg = document.createElement('div')
                fastestLapImg.style.backgroundImage = 'url(fastest_lap.svg)'
                fastestLapImg.style.backgroundSize = 'contain'
                fastestLapImg.style.width = '24px'
                fastestLapImg.style.height = '24px'
                fastestLapImg.style.marginTop = '1px'
                fastestLapImg.style.marginBottom = '1px'
                fastestLapImg.classList.add('cursor-pointer', `race${races[i]}_fastestLap`)
                fastestLapImg.id = `race${races[i]}_fastestlap_place${j}`
                fastestLapImg.onclick = function() { changeFastestLap(`race${races[i]}`, j); }
                fastestLapImg.style.opacity = j == 0 ? '0.11' : '0.1'

                raceFastestLapContainer.appendChild(fastestLapImg)
            }
        }

        const dnfText = document.createElement('div')
        dnfText.classList.add(`race${races[i]}`, 'text-xs', 'font-bold', 'text-center')
        dnfText.id = `race${races[i]}_dnfText`
        dnfText.innerHTML = 'DNFs'
        raceDriverContainer.appendChild(dnfText)

        const dnfFastestLapText = document.createElement('div')
        dnfFastestLapText.classList.add('text-xs', 'font-bold', 'text-center', `race${races[i]}_fastestLap`)
        dnfFastestLapText.style.opacity = '0'
        dnfFastestLapText.innerHTML = '-'
        dnfFastestLapText.id = `race${races[i]}_fastestlap_place${currDrivers.size}`
        dnfFastestLapText.onclick = function() { changeFastestLap(`race${races[i]}`, currDrivers.size); }
        raceFastestLapContainer.appendChild(dnfFastestLapText)
    }

    raceStandingsContainer.appendChild(raceDriverContainer)
    raceStandingsContainer.appendChild(raceFastestLapContainer)
    actualRaceDiv.appendChild(raceStandingsContainer)

    outerRaceDiv.appendChild(actualRaceDiv)

    raceDiv.appendChild(outerRaceDiv)

    // AT Driver Selector

    const ATDriverContainer = document.createElement('div')
    ATDriverContainer.classList = 'flex flex-col items-center justify-center'

    const ATDriverLabel = document.createElement('label')
    ATDriverLabel.innerHTML = 'DNS AT Driver<sup>?</sup>'
    ATDriverLabel.title = 'Select the AlphaTauri Driver that Did Not Start'
    ATDriverLabel.classList = 'mr-2 mt-1 text-xs'

    ATDriverContainer.appendChild(ATDriverLabel)

    const ATDriverInput = document.createElement('div')
    ATDriverInput.classList = 'flex flex-col text-xs'
    ATDriverInput.innerHTML = `
    <div>
        <input type="radio" id="race${races[i]}_DEV" name="race${races[i]}_ATDriver" value="DEV" onchange="changeATDriver('race${races[i]}', 'DEV')">
        <label for="race${races[i]}_DEV">DEV</label>
    </div>
    <div>
        <input type="radio" id="race${races[i]}_RIC" name="race${races[i]}_ATDriver" value="RIC" onchange="changeATDriver('race${races[i]}', 'RIC')">
        <label for="race${races[i]}_RIC">RIC</label>
    </div>
    `
    const ATDriverSet = new Set()
    ATDriverSet.add('DEV')
    ATDriverSet.add('RIC')

    const driverList = raceDriverContainer.querySelectorAll(`.race${races[i]}`)

    for (let j = 0; j < driverList.length; j++) {
        if (ATDriverSet.has(driverList[j].innerHTML)) {
            ATDriverSet.delete(driverList[j].innerHTML)
        }
        if (ATDriverSet.size === 1) break
    }

    ATDriverSet.forEach(item => {
        ATDriverInput.querySelector(`#${`race${races[i]}`}_${item}`).checked = true
    })

    ATDriverContainer.appendChild(ATDriverInput)

    raceDiv.appendChild(ATDriverContainer)

    const includeRaceContainer = document.createElement('div')
    includeRaceContainer.classList = 'flex flex-row items-center justify-center'

    const includeLabel = document.createElement('label')
    includeLabel.setAttribute('for', `race${races[i]}_includeRace`)
    includeLabel.innerHTML = 'Include?'
    includeLabel.classList = 'pr-2'

    includeRaceContainer.appendChild(includeLabel)

    const includeCheckbox = document.createElement('input')
    includeCheckbox.id = `race${races[i]}_includeRace`
    includeCheckbox.setAttribute('type', 'checkbox')
    includeCheckbox.checked = results[races[i]] !== undefined ? true : false
    includeCheckbox.onclick = function() { changeIncludeRace(`race${races[i]}`, includeCheckbox.checked) }

    includeRaceContainer.appendChild(includeCheckbox)

    raceDiv.appendChild(includeRaceContainer)

    const randomizeRaceContainer = document.createElement('div')
    randomizeRaceContainer.classList = 'flex flex-row items-center justify-center'
    randomizeRaceContainer.innerHTML = `
        <button class="border border-black px-1 mx-1" onclick="randomizeRace('race${races[i]}')">Randomize</button>
    `

    raceDiv.appendChild(randomizeRaceContainer)

    allRaceContainer.appendChild(raceDiv)
}

document.getElementById('main_container').appendChild(allRaceContainer)

/* driver standings */

const driverStandingsContainer = document.createElement('div')
driverStandingsContainer.classList = 'flex flex-col w-full mt-3'

const driverStandingsText = document.createElement('div')
driverStandingsText.classList = 'text-xl font-bold text-center w-full'
driverStandingsText.innerHTML = 'Driver Standings'

const driverStandingsTableContainer = document.createElement('div')
driverStandingsTableContainer.classList = 'flex flex-row w-full'

const driverStandingsTable = document.createElement('table')
driverStandingsTable.classList = 'mx-2'
driverStandingsTable.style.width = '1100px'

const driverStandingsHeading = document.createElement('thead')
const driverStandingsHeader = document.createElement('tr')
driverStandingsHeader.classList = 'bg-gray-200'
const driverPos = document.createElement('th')
driverPos.classList = 'text-sm'
driverPos.innerHTML = 'Pos.'
driverPos.style.width = '36px'
const driverName = document.createElement('th')
driverName.classList = 'text-sm'
driverName.innerHTML = 'Driver'
driverName.style.width = '150px'
driverStandingsHeader.appendChild(driverPos)
driverStandingsHeader.appendChild(driverName)
for (let i = 0; i < races.length; i++) {
    const raceElement = document.createElement('th')
    raceElement.classList = 'text-center'
    raceElement.style.width = '36px'

    const raceName = document.createElement('h2')
    raceName.innerHTML = races[i]
    raceName.classList = 'text-xs'
    const raceFlag = document.createElement('img')
    raceFlag.setAttribute('src', `flags/${races[i]}.svg`)
    raceFlag.setAttribute('width', '23')
    raceFlag.setAttribute('height', '12')
    raceFlag.classList = 'inline'

    raceElement.appendChild(raceName)
    raceElement.appendChild(raceFlag)

    driverStandingsHeader.appendChild(raceElement)
}

const driverStandingsPointsHeader = document.createElement('th')
driverStandingsPointsHeader.innerHTML = 'Points'
driverStandingsPointsHeader.classList = 'text-sm'
driverStandingsPointsHeader.style.width = '60px'
driverStandingsHeader.appendChild(driverStandingsPointsHeader)

driverStandingsHeading.appendChild(driverStandingsHeader)
driverStandingsTable.appendChild(driverStandingsHeading)

const driverStandingsBody = document.createElement('tbody')
driverStandingsBody.id = 'driverstandings_body'

for (let i = 0; i < scoreboard.length; i++) {
    const driverStandingsRow = document.createElement('tr')
    driverStandingsRow.classList = 'text-sm'
    const driverStandingsPos = document.createElement('td')
    driverStandingsPos.innerHTML = i + 1
    driverStandingsPos.classList = 'text-center'
    const driverStandingsName = document.createElement('td')
    driverStandingsName.innerHTML = scoreboard[i].name
    driverStandingsName.classList = 'pl-2'
    driverStandingsRow.appendChild(driverStandingsPos)
    driverStandingsRow.appendChild(driverStandingsName)

    for (let j = 0; j < races.length; j++) {
        const driverStandingsRace = document.createElement('td')
        driverStandingsRace.classList = 'text-center'
        if (drivers[scoreboard[i].abbreviation].raceResults[races[j]] === undefined) {
            driverStandingsRace.innerHTML = ""
        }
        else {
            driverStandingsRace.innerHTML = drivers[scoreboard[i].abbreviation].raceResults[races[j]].placement === 21 ? 'DNF' : drivers[scoreboard[i].abbreviation].raceResults[races[j]].placement
            if (drivers[scoreboard[i].abbreviation].raceResults[races[j]].placement === 1) {
                driverStandingsRace.style.backgroundColor = '#ffffbf'
            }
            else if (drivers[scoreboard[i].abbreviation].raceResults[races[j]].placement === 2) {
                driverStandingsRace.style.backgroundColor = '#dfdfdf'
            }
            else if (drivers[scoreboard[i].abbreviation].raceResults[races[j]].placement === 3) {
                driverStandingsRace.style.backgroundColor = '#ffdf9f'
            }
            else if (drivers[scoreboard[i].abbreviation].raceResults[races[j]].placement <= 10) {
                driverStandingsRace.style.backgroundColor = '#dfffdf'
            }
            else if (drivers[scoreboard[i].abbreviation].raceResults[races[j]].placement === 21) {
                driverStandingsRace.style.backgroundColor = '#efcfff'
            }
            else {
                driverStandingsRace.style.backgroundColor = '#cfcfff'
            }

            if (sprintRaces.has(races[j]) && drivers[scoreboard[i].abbreviation].raceResults[races[j]].sprintResult <= sprintPoints.length) driverStandingsRace.innerHTML += `<sup><b>&nbsp;${drivers[scoreboard[i].abbreviation].raceResults[races[j]].sprintResult}</b></sup>`
            if (drivers[scoreboard[i].abbreviation].raceResults[races[j]].fastestLap) driverStandingsRace.innerHTML += '<sup>&nbsp;F&nbsp;</sup>'
        }

        driverStandingsRow.appendChild(driverStandingsRace)
    }

    const driverStandingsPoints = document.createElement('td')
    driverStandingsPoints.innerHTML = scoreboard[i].points
    driverStandingsPoints.classList = 'font-bold text-center'

    driverStandingsRow.appendChild(driverStandingsPoints)

    driverStandingsBody.appendChild(driverStandingsRow)
}

driverStandingsTable.appendChild(driverStandingsBody)
driverStandingsTableContainer.appendChild(driverStandingsTable)

const driverStandingsKey = document.createElement('table')
driverStandingsKey.classList = 'h-min text-sm'
driverStandingsKey.style.width = '250px'
const driverStandingsKeyBody = document.createElement('tbody')
driverStandingsKeyBody.innerHTML = `
<tr>
    <th colspan="2">Key</th>
</tr>
<tr>
    <th style="width: 80px">Color</th>
    <th>Result</th>
</tr>
<tr style="background-color: #ffffbf">
    <td class="pl-2">Gold</td>
    <td class="pl-2">Winner</td>
</tr>
<tr style="background-color: #dfdfdf">
    <td class="pl-2">Silver</td>
    <td class="pl-2">Second Place</td>
</tr>
<tr style="background-color: #ffdf9f">
    <td class="pl-2">Bronze</td>
    <td class="pl-2">Third Place</td>
</tr>
<tr style="background-color: #dfffdf">
    <td class="pl-2">Green</td>
    <td class="pl-2">Other Points Position</td>
</tr>
<tr style="background-color: #cfcfff">
    <td class="pl-2">Blue</td>
    <td class="pl-2">Non-points Position</td>
</tr>
<tr style="background-color: #efcfff">
    <td class="pl-2">Purple</td>
    <td class="pl-2">Did Not Finish</td>
</tr>
<tr>
    <td class="pl-2">Blank</td>
    <td class="pl-2">Did Not Enter Race</td>
</tr>
<tr>
    <th>Annotation</th>
    <th>Meaning</th>
</tr>
<tr>
    <td class="pl-2">Superscript Number</td>
    <td class="pl-2">Points-scoring position in sprint</td>
</tr>
<tr>
    <td class="pl-2">F</td>
    <td class="pl-2">Fastest Lap</td>
</tr>
`
driverStandingsKey.appendChild(driverStandingsKeyBody)

driverStandingsTableContainer.appendChild(driverStandingsKey)

driverStandingsContainer.appendChild(driverStandingsText)
driverStandingsContainer.appendChild(driverStandingsTableContainer)
document.getElementById('main_container').appendChild(driverStandingsContainer)

const driverStandingsChartContainer = document.createElement('div')
driverStandingsChartContainer.classList = 'flex flex-row'

const driverStandingsChartDriverSelect = document.createElement('div')
driverStandingsChartDriverSelect.classList = 'flex flex-col mx-2'
driverStandingsChartDriverSelect.innerHTML = `
<div class="font-bold text-center">
    Select Drivers
</div>
`

for (const driver in drivers) {
    const driverSelectionDiv = document.createElement('div')
    driverSelectionDiv.classList = 'flex items-center'

    const driverSelectionInput = document.createElement('input')
    driverSelectionInput.id = `driverSelection_${driver}`
    driverSelectionInput.setAttribute('value', `${driver}`)
    driverSelectionInput.setAttribute('type', 'checkbox')
    driverSelectionInput.checked = true
    driverSelectionInput.onchange = function () { changeDriverSelection(`${driver}`, driverSelectionInput.checked) }
    driverSelectionDiv.appendChild(driverSelectionInput)

    const driverSelectionLabel = document.createElement('label')
    driverSelectionLabel.setAttribute('for', `driverSelection_${driver}`)
    driverSelectionLabel.innerHTML = `${drivers[driver].name}`
    driverSelectionDiv.appendChild(driverSelectionLabel)

    driverStandingsChartDriverSelect.appendChild(driverSelectionDiv)
}

const driverStandingsButton = document.createElement('div')
driverStandingsButton.classList = 'flex flex-row mt-1'
driverStandingsButton.innerHTML = `
    <button class="border border-black px-1 mx-1" onclick="selectAllDrivers()">Select All</button>
    <button class="border border-black px-1 mx-1" onclick="deselectAllDrivers()">Deselect All</button>
`
driverStandingsChartDriverSelect.appendChild(driverStandingsButton)

driverStandingsChartContainer.appendChild(driverStandingsChartDriverSelect)

const driverStandingsChartDiv = document.createElement('div')
driverStandingsChartDiv.classList = 'block flex flex-grow'

const driverStandingsChartCanvas = document.createElement('canvas')
driverStandingsChartCanvas.id = 'driverStandingsChart'
driverStandingsChartCanvas.classList = "cursor-default"

/* make actual chart */

const driverChartLabels = []
for (let i = 0; i < races.length; i++) {
    if (results[races[i]] !== undefined) {
        driverChartLabels.push(races[i])
    }
}

const driverChartData = {
    labels: driverChartLabels,
    datasets: [],
}

const teamsSeen = {}

const driverPointsDataSave = {}

for (const driver in drivers) {
    if (teamsSeen[drivers[driver].team] === undefined) {
        teamsSeen[drivers[driver].team] = 0
    }

    driverPointsDataSave[driver] = []

    let currPoints = 0
    const driverPointsData = []
    for (let i = 0; i < driverChartLabels.length; i++) {
        if (drivers[driver].raceResults[driverChartLabels[i]] === undefined) {
            driverPointsData.push(currPoints)
            driverPointsDataSave[driver].push(currPoints)
        }
        else {
            if (drivers[driver].raceResults[driverChartLabels[i]].sprintResult && drivers[driver].raceResults[driverChartLabels[i]].sprintResult <= sprintPoints.length) {
                currPoints += sprintPoints[drivers[driver].raceResults[driverChartLabels[i]].sprintResult - 1]
            }

            if (drivers[driver].raceResults[driverChartLabels[i]].placement <= points.length) {
                if (drivers[driver].raceResults[driverChartLabels[i]].fastestLap) {
                    currPoints += 1
                }
                currPoints += points[drivers[driver].raceResults[driverChartLabels[i]].placement - 1]
            }
            driverPointsData.push(currPoints)
            driverPointsDataSave[driver].push(currPoints)
        }
    }
    driverChartData.datasets.push({
        label: `${driver}`,
        backgroundColor: `${teams[drivers[driver].team].color}`,
        borderColor: `${teams[drivers[driver].team].color}`,
        borderDash: [5*teamsSeen[drivers[driver].team], 5*teamsSeen[drivers[driver].team]],
        data: driverPointsData,
    })

    teamsSeen[drivers[driver].team] += 1
}

const driverStandingsConfig = {
    type: 'line',
    data: driverChartData,
    options: {
        // plugins: {
        //     tooltip: {
        //         mode: 'index',
        //     }
        // }
    },
}

const driverStandingsChart = new Chart(driverStandingsChartCanvas, driverStandingsConfig)

driverStandingsChartDiv.appendChild(driverStandingsChartCanvas)
driverStandingsChartContainer.appendChild(driverStandingsChartDiv)

driverStandingsContainer.appendChild(driverStandingsChartContainer)
document.getElementById('main_container').appendChild(driverStandingsContainer)

/* Team Standings */

const teamStandingsContainer = document.createElement('div')
teamStandingsContainer.classList = 'flex flex-col w-full mt-3 mb-3'

const teamStandingsText = document.createElement('div')
teamStandingsText.classList = 'text-xl font-bold text-center w-full'
teamStandingsText.innerHTML = 'Team Standings'

const teamStandingsTableContainer = document.createElement('div')
teamStandingsTableContainer.classList = 'flex flex-row w-full'

const teamStandingsTable = document.createElement('table')
teamStandingsTable.classList = 'mx-2'
teamStandingsTable.style.width = '1100px'

const teamStandingsHeading = document.createElement('thead')
const teamStandingsHeader = document.createElement('tr')
teamStandingsHeader.classList = 'bg-gray-200'
const teamPos = document.createElement('th')
teamPos.classList = 'text-sm'
teamPos.innerHTML = 'Pos.'
teamPos.style.width = '36px'
const teamName = document.createElement('th')
teamName.classList = 'text-sm'
teamName.innerHTML = 'Driver'
teamName.style.width = '150px'
teamStandingsHeader.appendChild(teamPos)
teamStandingsHeader.appendChild(teamName)

for (let i = 0; i < races.length; i++) {
    const raceElement = document.createElement('th')
    raceElement.classList = 'text-center'
    raceElement.style.width = '36px'

    const raceName = document.createElement('h2')
    raceName.innerHTML = races[i]
    raceName.classList = 'text-xs'
    const raceFlag = document.createElement('img')
    raceFlag.setAttribute('src', `flags/${races[i]}.svg`)
    raceFlag.setAttribute('width', '23')
    raceFlag.setAttribute('height', '12')
    raceFlag.classList = 'inline'

    raceElement.appendChild(raceName)
    raceElement.appendChild(raceFlag)

    teamStandingsHeader.appendChild(raceElement)
}

const teamStandingsPointsHeader = document.createElement('th')
teamStandingsPointsHeader.innerHTML = 'Points'
teamStandingsPointsHeader.classList = 'text-sm'
teamStandingsPointsHeader.style.width = '60px'
teamStandingsHeader.appendChild(teamStandingsPointsHeader)

teamStandingsHeading.appendChild(teamStandingsHeader)
teamStandingsTable.appendChild(teamStandingsHeading)

const teamStandingsBody = document.createElement('tbody')
teamStandingsBody.id = 'teamStandings_body'

for (let i = 0; i < teamScoreboard.length; i++) {
    for (let DRIVER_NUM = 0; DRIVER_NUM < 2; DRIVER_NUM += 1) {
        const teamStandingsRow = document.createElement('tr')
        teamStandingsRow.classList = 'text-sm'
        if (DRIVER_NUM === 0) {
            const teamStandingsPos = document.createElement('td')
            teamStandingsPos.innerHTML = i + 1
            teamStandingsPos.classList = 'text-center'
            teamStandingsPos.rowSpan = '2'
            const teamStandingsName = document.createElement('td')
            teamStandingsName.innerHTML = teamScoreboard[i].name
            teamStandingsName.classList = 'pl-2'
            teamStandingsName.rowSpan = '2'
            teamStandingsRow.appendChild(teamStandingsPos)
            teamStandingsRow.appendChild(teamStandingsName)
        }

        for (let j = 0; j < races.length; j++) {
            const teamStandingsRace = document.createElement('td')
            teamStandingsRace.classList = 'text-center'
            if (teams[teamScoreboard[i].name].raceResults[races[j]] === undefined) {
                teamStandingsRace.innerHTML = ""
                teamStandingsRow.appendChild(teamStandingsRace)
                continue
            }
            const racers = Object.keys(teams[teamScoreboard[i].name].raceResults[races[j]]).length
            let currDriver = ''
            if (racers === 0) {
                teamStandingsRace.innerHTML = ""
                teamStandingsRow.appendChild(teamStandingsRace)
                continue
            }
            else if (racers === 1) {
                if (DRIVER_NUM === 1) {
                    teamStandingsRace.innerHTML = ""
                    teamStandingsRow.appendChild(teamStandingsRace)
                    continue
                }
                else {
                    for (const item in teams[teamScoreboard[i].name].raceResults[races[j]]) {
                        currDriver = item
                        break
                    }
                }
            }
            else {
                let minPlace = 22
                for (const item in teams[teamScoreboard[i].name].raceResults[races[j]]) {
                    if (teams[teamScoreboard[i].name].raceResults[races[j]][item].placement < minPlace) {
                        minPlace = teams[teamScoreboard[i].name].raceResults[races[j]][item].placement
                        currDriver = item
                    }
                }

                if (DRIVER_NUM === 1) {
                    for (const item in teams[teamScoreboard[i].name].raceResults[races[j]]) {
                        if (currDriver !== item) {
                            currDriver = item
                            break
                        }
                    }
                }
            }

            teamStandingsRace.innerHTML = teams[teamScoreboard[i].name].raceResults[races[j]][currDriver].placement === 21 ? 'DNF' : teams[teamScoreboard[i].name].raceResults[races[j]][currDriver].placement
            if (teams[teamScoreboard[i].name].raceResults[races[j]][currDriver].placement === 1) {
                teamStandingsRace.style.backgroundColor = '#ffffbf'
            }
            else if (teams[teamScoreboard[i].name].raceResults[races[j]][currDriver].placement === 2) {
                teamStandingsRace.style.backgroundColor = '#dfdfdf'
            }
            else if (teams[teamScoreboard[i].name].raceResults[races[j]][currDriver].placement === 3) {
                teamStandingsRace.style.backgroundColor = '#ffdf9f'
            }
            else if (teams[teamScoreboard[i].name].raceResults[races[j]][currDriver].placement <= 10) {
                teamStandingsRace.style.backgroundColor = '#dfffdf'
            }
            else if (teams[teamScoreboard[i].name].raceResults[races[j]][currDriver].placement === 21) {
                teamStandingsRace.style.backgroundColor = '#efcfff'
            }
            else {
                teamStandingsRace.style.backgroundColor = '#cfcfff'
            }

            if (sprintRaces.has(races[j]) && teams[teamScoreboard[i].name].raceResults[races[j]][currDriver].sprintResult <= sprintPoints.length) teamStandingsRace.innerHTML += `<sup><b>&nbsp;${teams[teamScoreboard[i].name].raceResults[races[j]][currDriver].sprintResult}</b></sup>`
            if (teams[teamScoreboard[i].name].raceResults[races[j]][currDriver].fastestLap) teamStandingsRace.innerHTML += '<sup>&nbsp;F&nbsp;</sup>'

            teamStandingsRow.appendChild(teamStandingsRace)
        }

        if (DRIVER_NUM === 0) {
            const teamStandingsPoints = document.createElement('td')
            teamStandingsPoints.innerHTML = teamScoreboard[i].points
            teamStandingsPoints.classList = 'font-bold text-center'
            teamStandingsPoints.rowSpan = '2'
            teamStandingsRow.appendChild(teamStandingsPoints)
        }

        teamStandingsBody.appendChild(teamStandingsRow)
    }
}

teamStandingsTable.appendChild(teamStandingsBody)
teamStandingsTableContainer.appendChild(teamStandingsTable)

const teamStandingsKey = document.createElement('table')
teamStandingsKey.classList = 'h-min text-sm'
teamStandingsKey.style.width = '250px'
const teamStandingsKeyBody = document.createElement('tbody')
teamStandingsKeyBody.innerHTML = `
<tr>
    <th colspan="2">Key</th>
</tr>
<tr>
    <th style="width: 80px">Color</th>
    <th>Result</th>
</tr>
<tr style="background-color: #ffffbf">
    <td class="pl-2">Gold</td>
    <td class="pl-2">Winner</td>
</tr>
<tr style="background-color: #dfdfdf">
    <td class="pl-2">Silver</td>
    <td class="pl-2">Second Place</td>
</tr>
<tr style="background-color: #ffdf9f">
    <td class="pl-2">Bronze</td>
    <td class="pl-2">Third Place</td>
</tr>
<tr style="background-color: #dfffdf">
    <td class="pl-2">Green</td>
    <td class="pl-2">Other Points Position</td>
</tr>
<tr style="background-color: #cfcfff">
    <td class="pl-2">Blue</td>
    <td class="pl-2">Non-points Position</td>
</tr>
<tr style="background-color: #efcfff">
    <td class="pl-2">Purple</td>
    <td class="pl-2">Did Not Finish</td>
</tr>
<tr>
    <td class="pl-2">Blank</td>
    <td class="pl-2">Did Not Enter Race</td>
</tr>
<tr>
    <th>Annotation</th>
    <th>Meaning</th>
</tr>
<tr>
    <td class="pl-2">Superscript Number</td>
    <td class="pl-2">Points-scoring position in sprint</td>
</tr>
<tr>
    <td class="pl-2">F</td>
    <td class="pl-2">Fastest Lap</td>
</tr>
`
teamStandingsKey.appendChild(teamStandingsKeyBody)

teamStandingsTableContainer.appendChild(teamStandingsKey)

teamStandingsContainer.appendChild(teamStandingsText)
teamStandingsContainer.appendChild(teamStandingsTableContainer)

const teamStandingsChartContainer = document.createElement('div')
teamStandingsChartContainer.classList = 'flex flex-row'

const teamStandingsChartDriverSelect = document.createElement('div')
teamStandingsChartDriverSelect.classList = 'flex flex-col mx-2'
teamStandingsChartDriverSelect.innerHTML = `
<div class="font-bold text-center">
    Select Teams
</div>
`

for (const team in teams) {
    const teamSelectionDiv = document.createElement('div')
    teamSelectionDiv.classList = 'flex items-center'

    const teamSelectionInput = document.createElement('input')
    teamSelectionInput.id = `teamSelection_${team}`
    teamSelectionInput.setAttribute('value', `${team}`)
    teamSelectionInput.setAttribute('type', 'checkbox')
    teamSelectionInput.checked = true
    teamSelectionInput.onchange = function () { changeTeamSelection(`${team}`, teamSelectionInput.checked) }
    teamSelectionDiv.appendChild(teamSelectionInput)

    const teamSelectionLabel = document.createElement('label')
    teamSelectionLabel.setAttribute('for', `teamSelection_${team}`)
    teamSelectionLabel.innerHTML = `${team}`
    teamSelectionDiv.appendChild(teamSelectionLabel)

    teamStandingsChartDriverSelect.appendChild(teamSelectionDiv)
}

const teamStandingsButton = document.createElement('div')
teamStandingsButton.classList = 'flex flex-row mt-1'
teamStandingsButton.innerHTML = `
    <button class="border border-black px-1 mx-1" onclick="selectAllTeams()">Select All</button>
    <button class="border border-black px-1 mx-1" onclick="deselectAllTeams()">Deselect All</button>
`
teamStandingsChartDriverSelect.appendChild(teamStandingsButton)

teamStandingsChartContainer.appendChild(teamStandingsChartDriverSelect)

const teamStandingsChartDiv = document.createElement('div')
teamStandingsChartDiv.classList = 'block flex flex-grow'

const teamStandingsChartCanvas = document.createElement('canvas')
teamStandingsChartCanvas.id = 'teamStandingsChart'
teamStandingsChartCanvas.classList = "cursor-default"

/* make actual chart */

const teamChartLabels = []
for (let i = 0; i < races.length; i++) {
    if (results[races[i]] !== undefined) {
        teamChartLabels.push(races[i])
    }
}

const teamChartData = {
    labels: teamChartLabels,
    datasets: [],
}

const teamPointsDataSave = {}

for (const team in teams) {
    teamPointsDataSave[team] = []

    let currPoints = 0
    const teamPointsData = []
    for (let i = 0; i < teamChartLabels.length; i++) {
        if (teams[team].raceResults[teamChartLabels[i]] === undefined) {
            teamPointsData.push(currPoints)
            teamPointsDataSave[driver].push(currPoints)
        }
        else {
            for (let driver in teams[team].raceResults[teamChartLabels[i]]) {
                if (teams[team].raceResults[teamChartLabels[i]][driver].sprintResult && teams[team].raceResults[teamChartLabels[i]][driver].sprintResult <= sprintPoints.length) {
                    currPoints += sprintPoints[teams[team].raceResults[teamChartLabels[i]][driver].sprintResult - 1]
                }

                if (teams[team].raceResults[teamChartLabels[i]][driver].placement <= points.length) {
                    if (teams[team].raceResults[teamChartLabels[i]][driver].fastestLap) {
                        currPoints += 1
                    }
                    currPoints += points[teams[team].raceResults[teamChartLabels[i]][driver].placement - 1]
                }
            }
            teamPointsData.push(currPoints)
            teamPointsDataSave[team].push(currPoints)
        }
    }
    teamChartData.datasets.push({
        label: `${team}`,
        backgroundColor: `${teams[team].color}`,
        borderColor: `${teams[team].color}`,
        data: teamPointsData,
    })
}

const teamStandingsConfig = {
    type: 'line',
    data: teamChartData,
    options: {},
}

const teamStandingsChart = new Chart(teamStandingsChartCanvas, teamStandingsConfig)

teamStandingsChartDiv.appendChild(teamStandingsChartCanvas)
teamStandingsChartContainer.appendChild(teamStandingsChartDiv)

teamStandingsContainer.appendChild(teamStandingsChartContainer)
document.getElementById('main_container').appendChild(teamStandingsContainer)

function changeDriverSelection(driver, state) {
    if (state) {
        const teamsCount = {}
        driverStandingsChart.data.datasets.push({
            label: `${driver}`,
            backgroundColor: `${teams[drivers[driver].team].color}`,
            borderColor: `${teams[drivers[driver].team].color}`,
            data: driverPointsDataSave[driver],
        })

        for (let i = 0; i < driverStandingsChart.data.datasets.length; i++) {
            if (teamsCount[drivers[driverStandingsChart.data.datasets[i].label].team] === undefined) {
                teamsCount[drivers[driverStandingsChart.data.datasets[i].label].team] = 0
            }
            driverStandingsChart.data.datasets[i].borderDash = [teamsCount[drivers[driverStandingsChart.data.datasets[i].label].team] * 5, teamsCount[drivers[driverStandingsChart.data.datasets[i].label].team] * 5]
            teamsCount[drivers[driverStandingsChart.data.datasets[i].label].team] += 1
        }
        driverStandingsChart.update()
    }
    else {
        for (let i = 0; i < driverStandingsChart.data.datasets.length; i++) {
            if (driverStandingsChart.data.datasets[i].label === driver) {
                driverStandingsChart.data.datasets.splice(i, 1)
                break
            }
        }
        driverStandingsChart.update()
    }
}

function changeTeamSelection(team, state) {
    if (state) {
        teamStandingsChart.data.datasets.push({
            label: `${team}`,
            backgroundColor: `${teams[team].color}`,
            borderColor: `${teams[team].color}`,
            data: teamPointsDataSave[team],
        })

        teamStandingsChart.update()
    }
    else {
        for (let i = 0; i < teamStandingsChart.data.datasets.length; i++) {
            if (teamStandingsChart.data.datasets[i].label === team) {
                teamStandingsChart.data.datasets.splice(i, 1)
                break
            }
        }
        teamStandingsChart.update()
    }
}

function updateChart() {
    for (const key in driverPointsDataSave) {
        delete driverPointsDataSave[key]
    }
    const newLabels = []

    for (let i = 0; i < races.length; i++) {
        if (results[races[i]] !== undefined) {
            newLabels.push(races[i])
        }
    }

    driverStandingsChart.data.labels = newLabels
    driverStandingsChart.data.datasets = []

    const teamsCount = {}

    for (const driver in drivers) {
        if (teamsCount[drivers[driver].team] === undefined) {
            teamsCount[drivers[driver].team] = 0
        }

        driverPointsDataSave[driver] = []

        let currPoints = 0
        const newPointsData = []
        for (let i = 0; i < newLabels.length; i++) {
            if (drivers[driver].raceResults[newLabels[i]] === undefined) {
                newPointsData.push(currPoints)
                driverPointsDataSave[driver].push(currPoints)
            }
            else {
                if (drivers[driver].raceResults[newLabels[i]].sprintResult && drivers[driver].raceResults[newLabels[i]].sprintResult <= sprintPoints.length) {
                    currPoints += sprintPoints[drivers[driver].raceResults[newLabels[i]].sprintResult - 1]
                }

                if (drivers[driver].raceResults[newLabels[i]].placement <= points.length) {
                    if (drivers[driver].raceResults[newLabels[i]].fastestLap) {
                        currPoints += 1
                    }
                    currPoints += points[drivers[driver].raceResults[newLabels[i]].placement - 1]
                }
                newPointsData.push(currPoints)
                driverPointsDataSave[driver].push(currPoints)
            }
        }
        if (document.getElementById(`driverSelection_${driver}`).checked) {
            driverStandingsChart.data.datasets.push({
                label: `${driver}`,
                backgroundColor: `${teams[drivers[driver].team].color}`,
                borderColor: `${teams[drivers[driver].team].color}`,
                borderDash: [5*teamsCount[drivers[driver].team], 5*teamsCount[drivers[driver].team]],
                data: newPointsData,
            })
        }

        teamsCount[drivers[driver].team] += 1
    }

    driverStandingsChart.update()

    /* Update Teams */

    for (const team in teamPointsDataSave) {
        delete teamPointsDataSave[team]
    }

    const newTeamLabels = []
    for (let i = 0; i < races.length; i++) {
        if (results[races[i]] !== undefined) {
            newTeamLabels.push(races[i])
        }
    }

    teamStandingsChart.data.labels = newTeamLabels
    teamStandingsChart.data.datasets = []

    for (const team in teams) {
        teamPointsDataSave[team] = []

        let currPoints = 0
        const newTeamPoints = []
        for (let i = 0; i < newTeamLabels.length; i++) {
            if (teams[team].raceResults[newTeamLabels[i]] === undefined) {
                newTeamPoints.push(currPoints)
                teamPointsDataSave[driver].push(currPoints)
            }
            else {
                for (let driver in teams[team].raceResults[newTeamLabels[i]]) {
                    if (teams[team].raceResults[newTeamLabels[i]][driver].sprintResult && teams[team].raceResults[newTeamLabels[i]][driver].sprintResult <= sprintPoints.length) {
                        currPoints += sprintPoints[teams[team].raceResults[newTeamLabels[i]][driver].sprintResult - 1]
                    }

                    if (teams[team].raceResults[newTeamLabels[i]][driver].placement <= points.length) {
                        if (teams[team].raceResults[newTeamLabels[i]][driver].fastestLap) {
                            currPoints += 1
                        }
                        currPoints += points[teams[team].raceResults[newTeamLabels[i]][driver].placement - 1]
                    }
                }
                newTeamPoints.push(currPoints)
                teamPointsDataSave[team].push(currPoints)
            }
        }
        if (document.getElementById(`teamSelection_${team}`).checked) {
            teamChartData.datasets.push({
                label: `${team}`,
                backgroundColor: `${teams[team].color}`,
                borderColor: `${teams[team].color}`,
                data: newTeamPoints,
            })
        }
    }
    teamStandingsChart.update()
}

function randomizeRace(raceName) {
    if (!raceName.includes("sprint") && !document.getElementById(`${raceName}_includeRace`).checked) {
        document.getElementById(`${raceName}_includeRace`).checked = true
        changeIncludeRace(raceName, true)
    }

    if (sprintRaces.has(raceName.substring(raceName.length-3))) {
        randomizeRace(`${raceName}sprint`)
    }

    const raceDriversQuery = document.querySelectorAll(`.${raceName}`)
    for (let i = 0; i < raceDriversQuery.length; i++) {
        if (!raceName.includes('sprint')) {
            document.getElementById(`${raceName}_fastestlap_place${i}`).style.opacity = "0.1"
        }
        raceDriversQuery[i].id = ""
    }

    const randomizedOrder = randomizeRacers(raceName)
    const fastestLapPlace = Math.floor(Math.random() * 20)
    let racerCount = 0
    let fastestLapIndex = 0

    for (let i = 0; i < randomizedOrder.length; i++) {
        if (randomizedOrder[i] === "DNFs") {
            raceDriversQuery[i].id = `${raceName}_dnfText`
            raceDriversQuery[i].innerHTML = 'DNFs'
            raceDriversQuery[i].classList = `${raceName} text-xs font-bold text-center`
            raceDriversQuery[i].style.borderLeft = ''
        }
        else {
            raceDriversQuery[i].innerHTML = randomizedOrder[i]
            raceDriversQuery[i].style.borderLeft = `4px solid ${teams[drivers[randomizedOrder[i]].team].color}`
            raceDriversQuery[i].classList = `${raceName} block pl-1`
            if (!raceName.includes('sprint') && fastestLapPlace === racerCount) {
                // document.getElementById(`${raceName}_fastestlap_place${i}`).style.opacity = "1"
                // changeFastestLap(raceName, i)
                // fastestLapDriver = raceDriversQuery[i]
                fastestLapIndex = i
            }
            racerCount += 1
        }
    }
    fixPlaceNumbers(raceName)
    changeRaceOrder(raceName)

    changeFastestLap(raceName, fastestLapIndex)
    fastestLapDriver = raceDriversQuery[fastestLapIndex]
}

function randomizeRacers(raceName) {
    const raceDrivers = []
    const raceDriversQuery = document.querySelectorAll(`.${raceName}`)
    for (let i = 0; i < raceDriversQuery.length; i++) {
        if (raceDriversQuery[i].innerHTML !== "DNFs") {
            raceDrivers.push(raceDriversQuery[i].innerHTML)
        }
    }
    for (let i = raceDrivers.length-1; i > 0; i--) {
        const j = Math.floor(Math.random()*(i+1))
        const temp = raceDrivers[i]
        raceDrivers[i] = raceDrivers[j]
        raceDrivers[j] = temp
    }

    const DNFplace = Math.floor((Math.pow(Math.random(), 0.3)*21)+1)
    raceDrivers.splice(DNFplace, 0, "DNFs")

    return raceDrivers
}

function selectAllDrivers() {
    for (const driver in drivers) {
        if (!document.getElementById(`driverSelection_${driver}`).checked) {
            document.getElementById(`driverSelection_${driver}`).checked = true
            changeDriverSelection(driver, true)
        }
    }
}

function deselectAllDrivers() {
    for (const driver in drivers) {
        document.getElementById(`driverSelection_${driver}`).checked = false
        driverStandingsChart.data.datasets = []
    }
    driverStandingsChart.update()
}

function selectAllTeams() {
    for (const team in teams) {
        if (!document.getElementById(`teamSelection_${team}`).checked) {
            document.getElementById(`teamSelection_${team}`).checked = true
            changeTeamSelection(team, true)
        }
    }
}

function deselectAllTeams() {
    for (const team in teams) {
        document.getElementById(`teamSelection_${team}`).checked = false
        teamStandingsChart.data.datasets = []
    }
    teamStandingsChart.update()
}

function changeATDriver(raceName, driver) {
    const driverLocations = {}
    const ATDriverSet = new Set()
    ATDriverSet.add('DEV')
    ATDriverSet.add('RIC')

    if (sprintRaces.has(raceName.substring(raceName.length-3))) {
        const driverList = document.querySelectorAll(`.${raceName}sprint`)

        for (let j = 0; j < driverList.length; j++) {
            if (ATDriverSet.has(driverList[j].innerHTML)) {
                ATDriverSet.delete(driverList[j].innerHTML)
                driverLocations[driverList[j].innerHTML] = j
            }
            if (ATDriverSet.size === 1) break
        }

        ATDriverSet.forEach(item => {
            driverList[driverLocations[driver]].innerHTML = item

            if (document.getElementById(`${raceName}_includeRace`).checked) {
                if (driverList[driverLocations[driver]] < sprintPoints.length) {
                    drivers[driver].points -= sprintPoints[driverList[driverLocations[driver]]]
                    drivers[item].points += sprintPoints[driverList[driverLocations[driver]]]
                }

                drivers[item].raceResults[raceName.substring(raceName.length-3)] = { sprintResult: driverLocations[driver] + 1 }
            }
        })
    }

    ATDriverSet.add('DEV')
    ATDriverSet.add('RIC')

    const driverList = document.querySelectorAll(`.${raceName}`)

    for (let j = 0; j < driverList.length; j++) {
        if (ATDriverSet.has(driverList[j].innerHTML)) {
            ATDriverSet.delete(driverList[j].innerHTML)
            driverLocations[driverList[j].innerHTML] = j
        }
        if (ATDriverSet.size === 1) break
    }

    ATDriverSet.forEach(item => {
        driverList[driverLocations[driver]].innerHTML = item

        if (!document.getElementById(`${raceName}_includeRace`).checked) {
            document.getElementById(`${raceName}_includeRace`).checked = true
            changeIncludeRace(raceName, true)
            return
        }

        if (driverLocations[driver] < points.length) {
            drivers[driver].points -= points[driverLocations[driver]]
            drivers[item].points += points[driverLocations[driver]]
        }
        if (document.querySelectorAll(`.${raceName}_fastestLap`)) {
            if (driverList[driverLocations[driver]].style.opacity === '1') {
                drivers[driver].points -= 1
                drivers[item].points += 1
            }
        }

        drivers[driver].placements[driverLocations[driver]] -= 1
        delete drivers[driver].raceResults[raceName.substring(raceName.length-3)]

        drivers[item].placements[driverLocations[driver]] += 1
        if (sprintRaces.has(raceName.substring(raceName.length-3))) {
            drivers[item].raceResults[raceName.substring(raceName.length-3)].placement = driverLocations[driver] + 1
            drivers[item].raceResults[raceName.substring(raceName.length-3)].fastestLap = driverList[driverLocations[driver]].style.opacity === '1' ? true : false
        }
        else {
            drivers[item].raceResults[raceName.substring(raceName.length-3)] = {
                placement: driverLocations[driver] + 1,
                fastestLap: driverList[driverLocations[driver]].style.opacity === '1' ? true : false,
            }
        }

        teams[drivers[driver].team].raceResults[raceName.substring(raceName.length-3)][item] = {}
        for (const key in teams[drivers[driver].team].raceResults[raceName.substring(raceName.length-3)][driver]) {
            teams[drivers[driver].team].raceResults[raceName.substring(raceName.length-3)][item][key] = teams[drivers[driver].team].raceResults[raceName.substring(raceName.length-3)][driver][key]
        }
        delete teams[drivers[driver].team].raceResults[raceName.substring(raceName.length-3)][driver]
    })

    sortScoreboard()
    recreateTables()
    updateChart()

    return
}

function changeFastestLap(raceName, ind) {
    const fastestLaps = document.querySelectorAll(`.${raceName}_fastestLap`)
    for (let i = 0; i < fastestLaps.length; i++) {
        if (fastestLaps[i].innerHTML === "")
            fastestLaps[i].style.opacity = '0.1'
    }

    fastestLaps[ind].style.opacity = '1'

    if (!document.getElementById(`${raceName}_includeRace`).checked) {
        document.getElementById(`${raceName}_includeRace`).checked = true
        changeIncludeRace(raceName, true)
        return
    }

    const driverList = document.querySelectorAll(`.${raceName}`)

    if (drivers[results[raceName.substring(raceName.length-3)].fastest].raceResults[raceName.substring(raceName.length-3)].placement <= 10) {
        drivers[results[raceName.substring(raceName.length-3)].fastest].points -= 1
        teams[drivers[results[raceName.substring(raceName.length-3)].fastest].team].points -= 1
    }
    drivers[results[raceName.substring(raceName.length-3)].fastest].raceResults[raceName.substring(raceName.length-3)].fastestLap = false
    teams[drivers[results[raceName.substring(raceName.length-3)].fastest].team].raceResults[raceName.substring(raceName.length-3)][results[raceName.substring(raceName.length-3)].fastest].fastestLap = false

    if (ind < 10) {
        drivers[driverList[ind].innerHTML].points += 1
        teams[drivers[driverList[ind].innerHTML].team].points += 1
    }
    drivers[driverList[ind].innerHTML].raceResults[raceName.substring(raceName.length-3)].fastestLap = true
    teams[drivers[driverList[ind].innerHTML].team].raceResults[raceName.substring(raceName.length-3)][driverList[ind].innerHTML].fastestLap = true

    results[raceName.substring(raceName.length-3)].fastest = driverList[ind].innerHTML

    sortScoreboard()
    recreateTables()
    updateChart()
}

function changeIncludeRace(raceName, state) {
    if (state) {
        document.getElementById(`${raceName}_fullContainer`).classList.remove('bg-gray-500')
        const fastestLaps = document.querySelectorAll(`.${raceName}_fastestLap`)
        for (let i = 0; i < fastestLaps.length; i++) {
            if (fastestLaps[i].style.opacity === "0.11") {
                fastestLaps[i].style.opacity = '1'
            }
        }

        results[raceName.substring(raceName.length-3)] = {
            standings: [],
            dnf: [],
            fastest: '',
        }

        for (const team in teams) {
            teams[team].raceResults[raceName.substring(raceName.length-3)] = {}
        }

        let dnfFound = false
        const driverList = document.querySelectorAll(`.${raceName}`)
        for (let i = 0; i < Math.min(currDrivers.size+1, driverList.length); i++) {
            if (driverList[i].innerHTML === 'DNFs') {
                dnfFound = true
            }
            else {
                if (dnfFound) {
                    drivers[driverList[i].innerHTML].raceResults[raceName.substring(raceName.length-3)] = {
                        placement: 21,
                        fastestLap: fastestLaps[i].style.opacity === "1" ? true : false,
                    }
                    teams[drivers[driverList[i].innerHTML].team].raceResults[raceName.substring(raceName.length-3)][driverList[i].innerHTML] = {
                        placement: 21,
                        fastestLap: fastestLaps[i].style.opacity === "1" ? true : false,
                    }

                    drivers[driverList[i].innerHTML].placements[20] += 1
                    teams[drivers[driverList[i].innerHTML].team].placements[20] += 1

                    results[raceName.substring(raceName.length-3)].dnf.push(driverList[i].innerHTML)
                    if (fastestLaps[i].style.opacity === "1")
                        results[raceName.substring(raceName.length-3)].fastest = driverList[i].innerHTML
                }
                else {
                    drivers[driverList[i].innerHTML].raceResults[raceName.substring(raceName.length-3)] = {
                        placement: i+1,
                        fastestLap: fastestLaps[i].style.opacity === "1" ? true : false,
                    }
                    teams[drivers[driverList[i].innerHTML].team].raceResults[raceName.substring(raceName.length-3)][driverList[i].innerHTML] = {
                        placement: i+1,
                        fastestLap: fastestLaps[i].style.opacity === "1" ? true : false,
                    }

                    if (i < points.length) {
                        drivers[driverList[i].innerHTML].points += points[i]
                        teams[drivers[driverList[i].innerHTML].team].points += points[i]
                        if (fastestLaps[i].style.opacity === "1") {
                            drivers[driverList[i].innerHTML].points += 1
                            teams[drivers[driverList[i].innerHTML].team].points += 1
                        }
                    }

                    drivers[driverList[i].innerHTML].placements[i] += 1
                    teams[drivers[driverList[i].innerHTML].team].placements[i] += 1

                    results[raceName.substring(raceName.length-3)].standings.push(driverList[i].innerHTML)
                    if (fastestLaps[i].style.opacity === "1")
                        results[raceName.substring(raceName.length-3)].fastest = driverList[i].innerHTML
                }
            }
        }

        if (sprintRaces.has(raceName.substring(raceName.length-3))) {
            results[raceName.substring(raceName.length-3)].sprint = []
            results[raceName.substring(raceName.length-3)].sprintdnf = []

            dnfFound = false
            const driverList = document.querySelectorAll(`.${raceName}sprint`)
            for (let i = 0; i < Math.min(currDrivers.size+1, driverList.length); i++) {
                if (driverList[i].innerHTML === 'DNFs') {
                    dnfFound = true
                }
                else {
                    if (dnfFound) {
                        drivers[driverList[i].innerHTML].raceResults[raceName.substring(raceName.length-3)].sprintResult = 21
                        teams[drivers[driverList[i].innerHTML].team].raceResults[raceName.substring(raceName.length-3)][driverList[i].innerHTML].sprintResult = 21

                        results[raceName.substring(raceName.length-3)].sprintdnf.push(driverList[i].innerHTML)
                    }
                    else {
                        drivers[driverList[i].innerHTML].raceResults[raceName.substring(raceName.length-3)].sprintResult = i+1
                        teams[drivers[driverList[i].innerHTML].team].raceResults[raceName.substring(raceName.length-3)][driverList[i].innerHTML].sprintResult = i+1

                        if (i < sprintPoints.length) {
                            drivers[driverList[i].innerHTML].points += sprintPoints[i]
                            teams[drivers[driverList[i].innerHTML].team].points += sprintPoints[i]
                        }

                        results[raceName.substring(raceName.length-3)].sprint.push(driverList[i].innerHTML)
                    }
                }
            }
        }
    }
    else {
        document.getElementById(`${raceName}_fullContainer`).classList.add('bg-gray-500')
        const fastestLaps = document.querySelectorAll(`.${raceName}_fastestLap`)
        for (let i = 0; i < fastestLaps.length; i++) {
            if (fastestLaps[i].style.opacity === "1") {
                fastestLaps[i].style.opacity = '0.11'
            }
        }

        let dnfFound = false
        const driverList = document.querySelectorAll(`.${raceName}`)
        for (let i = 0; i < Math.min(currDrivers.size+1, fastestLaps.length); i++) {
            if (driverList[i].innerHTML === 'DNFs') {
                dnfFound = true
            }
            else {
                if (dnfFound) {
                    delete drivers[driverList[i].innerHTML].raceResults[raceName.substring(raceName.length-3)]

                    drivers[driverList[i].innerHTML].placements[20] -= 1
                    teams[drivers[driverList[i].innerHTML].team].placements[20] -= 1
                }
                else {
                    delete drivers[driverList[i].innerHTML].raceResults[raceName.substring(raceName.length-3)]

                    if (i < points.length) {
                        drivers[driverList[i].innerHTML].points -= points[i]
                        teams[drivers[driverList[i].innerHTML].team].points -= points[i]
                        if (fastestLaps[i].style.opacity === "0.11") {
                            drivers[driverList[i].innerHTML].points -= 1
                            teams[drivers[driverList[i].innerHTML].team].points -= 1
                        }
                    }

                    drivers[driverList[i].innerHTML].placements[i] -= 1
                    teams[drivers[driverList[i].innerHTML].team].placements[i] -= 1
                }
            }
        }

        if (sprintRaces.has(raceName.substring(raceName.length-3))) {
            const driverList = document.querySelectorAll(`.${raceName}sprint`)
            for (let i = 0; i < Math.min(currDrivers.size+1, fastestLaps.length); i++) {
                if (driverList[i].innerHTML === 'DNFs') {
                    dnfFound = true
                    break
                }
                else {
                    if (i < sprintPoints.length) {
                        drivers[driverList[i].innerHTML].points -= sprintPoints[i]
                        teams[drivers[driverList[i].innerHTML].team].points -= sprintPoints[i]
                    }
                    else {
                        break
                    }
                }
            }
        }

        delete results[raceName.substring(raceName.length-3)]

        /* delete race results for each team */

        for (const team in teams) {
            delete teams[team].raceResults[raceName.substring(raceName.length-3)]
        }
    }

    sortScoreboard()
    recreateTables()
    updateChart()
}

function changeRaceOrder(raceName) {
    if (raceName.includes("sprint")) {
        const raceSprintName = raceName.substring(4,7)
        for (let i = 0; i < results[raceSprintName].sprint.length; i++) {
            if (i < sprintPoints.length) {
                drivers[results[raceSprintName].sprint[i]].points -= sprintPoints[i]
                teams[drivers[results[raceSprintName].sprint[i]].team].points -= sprintPoints[i]
            }
        }

        // loop thru all new drivers and add new points
        results[raceSprintName].sprint = []
        results[raceSprintName].sprintdnf = []
        let dnfFound = false
        const driverList = document.querySelectorAll(`.${raceName}`)
        for (let i = 0; i < driverList.length; i++) {
            if (driverList[i].innerHTML === 'DNFs') {
                dnfFound = true
            }
            else {
                if (dnfFound) {
                    results[raceSprintName].sprintdnf.push(driverList[i].innerHTML)
                    drivers[driverList[i].innerHTML].raceResults[raceSprintName].sprintResult = 21
                    teams[drivers[driverList[i].innerHTML].team].raceResults[raceSprintName][driverList[i].innerHTML].sprintResult = 21
                }
                else {
                    results[raceSprintName].sprint.push(driverList[i].innerHTML)
                    if (i < sprintPoints.length) {
                        drivers[driverList[i].innerHTML].points += sprintPoints[i]
                        teams[drivers[driverList[i].innerHTML].team].points += sprintPoints[i]
                    }
                    drivers[driverList[i].innerHTML].raceResults[raceSprintName].sprintResult = i+1
                    teams[drivers[driverList[i].innerHTML].team].raceResults[raceSprintName][driverList[i].innerHTML].sprintResult = i+1
                }
            }
        }
    }
    else {
        // loop thru all the drivers old placements and remove points, inclduing fastest lap
        for (let i = 0; i < results[raceName.substring(raceName.length-3)].standings.length; i++) {
            if (results[raceName.substring(raceName.length-3)].standings[i] === results[raceName.substring(raceName.length-3)].fastest && i < 10) {
                drivers[results[raceName.substring(raceName.length-3)].standings[i]].points -= 1
                teams[drivers[results[raceName.substring(raceName.length-3)].standings[i]].team].points -= 1
            }
            if (i < points.length) {
                drivers[results[raceName.substring(raceName.length-3)].standings[i]].points -= points[i]
                teams[drivers[results[raceName.substring(raceName.length-3)].standings[i]].team].points -= points[i]
            }
            drivers[results[raceName.substring(raceName.length-3)].standings[i]].placements[i] -= 1
            teams[drivers[results[raceName.substring(raceName.length-3)].standings[i]].team].placements[i] -= 1
        }
        for (let i = 0; i < results[raceName.substring(raceName.length-3)].dnf.length; i++) {
            drivers[results[raceName.substring(raceName.length-3)].dnf[i]].placements[20] -= 1
            teams[drivers[results[raceName.substring(raceName.length-3)].dnf[i]].team].placements[20] -= 1
        }

        // loop thru all new drivers and add new points
        results[raceName.substring(raceName.length-3)].standings = []
        results[raceName.substring(raceName.length-3)].dnf = []
        let dnfFound = false
        const driverList = document.querySelectorAll(`.${raceName}`)
        for (let i = 0; i < driverList.length; i++) {
            if (driverList[i].innerHTML === 'DNFs') {
                dnfFound = true
            }
            else {
                if (dnfFound) {
                    results[raceName.substring(raceName.length-3)].dnf.push(driverList[i].innerHTML)
                    drivers[driverList[i].innerHTML].placements[20] += 1
                    drivers[driverList[i].innerHTML].raceResults[raceName.substring(raceName.length-3)].placement = 21

                    teams[drivers[driverList[i].innerHTML].team].placements[20] += 1
                    teams[drivers[driverList[i].innerHTML].team].raceResults[raceName.substring(raceName.length-3)][driverList[i].innerHTML].placement = 21
                }
                else {
                    results[raceName.substring(raceName.length-3)].standings.push(driverList[i].innerHTML)
                    // if (driverList[i].innerHTML === results[raceName.substring(raceName.length-3)].fastest && i < 10) {
                    if (document.getElementById(`${raceName}_fastestlap_place${i}`).style.opacity === "1" && i < 10) {
                        results[raceName.substring(raceName.length-3)].fastest = driverList[i].innerHTML
                        drivers[driverList[i].innerHTML].points += 1
                        teams[drivers[driverList[i].innerHTML].team].points += 1
                    }
                    if (i < points.length) {
                        drivers[driverList[i].innerHTML].points += points[i]
                        teams[drivers[driverList[i].innerHTML].team].points += points[i]
                    }
                    drivers[driverList[i].innerHTML].placements[i] += 1
                    drivers[driverList[i].innerHTML].raceResults[raceName.substring(raceName.length-3)].placement = i+1

                    teams[drivers[driverList[i].innerHTML].team].placements[i] += 1
                    teams[drivers[driverList[i].innerHTML].team].raceResults[raceName.substring(raceName.length-3)][driverList[i].innerHTML].placement = i+1
                }
            }
        }
    }

    sortScoreboard()
    recreateTables()
    updateChart()
}

function sortScoreboard() {
    scoreboard = []
    for (const driver in drivers) {
        scoreboard.push({
            name: drivers[driver].name,
            abbreviation: driver,
            team: drivers[driver].team,
            points: drivers[driver].points,
            placements: drivers[driver].placements,
        })
    }

    scoreboard.sort(function(a, b) {
        if (a.points == b.points) {
            for (let i = 0; i < a.placements.length; i++) {
                if (a.placements[i] !== b.placements[i]) return b.placements[i] - a.placements[i]
            }
            return 0
        }
        else {
            return b.points - a.points
        }
    })

    teamScoreboard = []
    for (const team in teams) {
        teamScoreboard.push({
            name: team,
            points: teams[team].points,
            placements: teams[team].placements,
        })
    }

    teamScoreboard.sort(function(a, b) {
        if (a.points == b.points) {
            for (let i = 0; i < a.placements.length; i++) {
                if (a.placements[i] !== b.placements[i]) return b.placements[i] - a.placements[i]
            }
            return 0
        }
        else {
            return b.points - a.points
        }
    })
}

function recreateTables() {
    const driverStandingsBody = document.getElementById('driverstandings_body')
    driverStandingsBody.innerHTML = ''

    for (let i = 0; i < scoreboard.length; i++) {
        const driverStandingsRow = document.createElement('tr')
        driverStandingsRow.classList = 'text-sm'
        const driverStandingsPos = document.createElement('td')
        driverStandingsPos.innerHTML = i + 1
        driverStandingsPos.classList = 'text-center'
        const driverStandingsName = document.createElement('td')
        driverStandingsName.innerHTML = scoreboard[i].name
        driverStandingsName.classList = 'pl-2'
        driverStandingsRow.appendChild(driverStandingsPos)
        driverStandingsRow.appendChild(driverStandingsName)

        for (let j = 0; j < races.length; j++) {
            const driverStandingsRace = document.createElement('td')
            driverStandingsRace.classList = 'text-center'
            if (drivers[scoreboard[i].abbreviation].raceResults[races[j]] === undefined) {
                driverStandingsRace.innerHTML = ""
            }
            else {
                driverStandingsRace.innerHTML = drivers[scoreboard[i].abbreviation].raceResults[races[j]].placement === 21 ? 'DNF' : drivers[scoreboard[i].abbreviation].raceResults[races[j]].placement
                if (drivers[scoreboard[i].abbreviation].raceResults[races[j]].placement === 1) {
                    driverStandingsRace.style.backgroundColor = '#ffffbf'
                }
                else if (drivers[scoreboard[i].abbreviation].raceResults[races[j]].placement === 2) {
                    driverStandingsRace.style.backgroundColor = '#dfdfdf'
                }
                else if (drivers[scoreboard[i].abbreviation].raceResults[races[j]].placement === 3) {
                    driverStandingsRace.style.backgroundColor = '#ffdf9f'
                }
                else if (drivers[scoreboard[i].abbreviation].raceResults[races[j]].placement <= 10) {
                    driverStandingsRace.style.backgroundColor = '#dfffdf'
                }
                else if (drivers[scoreboard[i].abbreviation].raceResults[races[j]].placement === 21) {
                    driverStandingsRace.style.backgroundColor = '#efcfff'
                }
                else {
                    driverStandingsRace.style.backgroundColor = '#cfcfff'
                }

                if (sprintRaces.has(races[j]) && drivers[scoreboard[i].abbreviation].raceResults[races[j]].sprintResult <= sprintPoints.length) driverStandingsRace.innerHTML += `<sup><b>&nbsp;${drivers[scoreboard[i].abbreviation].raceResults[races[j]].sprintResult}</b></sup>`
                if (drivers[scoreboard[i].abbreviation].raceResults[races[j]].fastestLap) driverStandingsRace.innerHTML += '<sup>&nbsp;F&nbsp;</sup>'
            }

            driverStandingsRow.appendChild(driverStandingsRace)
        }

        const driverStandingsPoints = document.createElement('td')
        driverStandingsPoints.innerHTML = scoreboard[i].points
        driverStandingsPoints.classList = 'font-bold text-center'

        driverStandingsRow.appendChild(driverStandingsPoints)

        driverStandingsBody.appendChild(driverStandingsRow)
    }

    const teamStandingsBody = document.getElementById('teamStandings_body')
    teamStandingsBody.innerHTML = ''

    for (let i = 0; i < teamScoreboard.length; i++) {
        for (let DRIVER_NUM = 0; DRIVER_NUM < 2; DRIVER_NUM += 1) {
            const teamStandingsRow = document.createElement('tr')
            teamStandingsRow.classList = 'text-sm'
            if (DRIVER_NUM === 0) {
                const teamStandingsPos = document.createElement('td')
                teamStandingsPos.innerHTML = i + 1
                teamStandingsPos.classList = 'text-center'
                teamStandingsPos.rowSpan = '2'
                const teamStandingsName = document.createElement('td')
                teamStandingsName.innerHTML = teamScoreboard[i].name
                teamStandingsName.classList = 'pl-2'
                teamStandingsName.rowSpan = '2'
                teamStandingsRow.appendChild(teamStandingsPos)
                teamStandingsRow.appendChild(teamStandingsName)
            }

            for (let j = 0; j < races.length; j++) {
                const teamStandingsRace = document.createElement('td')
                teamStandingsRace.classList = 'text-center'
                if (teams[teamScoreboard[i].name].raceResults[races[j]] === undefined) {
                    teamStandingsRace.innerHTML = ""
                    teamStandingsRow.appendChild(teamStandingsRace)
                    continue
                }
                const racers = Object.keys(teams[teamScoreboard[i].name].raceResults[races[j]]).length
                let currDriver = ''
                if (racers === 0) {
                    teamStandingsRace.innerHTML = ""
                    teamStandingsRow.appendChild(teamStandingsRace)
                    continue
                }
                else if (racers === 1) {
                    if (DRIVER_NUM === 1) {
                        teamStandingsRace.innerHTML = ""
                        teamStandingsRow.appendChild(teamStandingsRace)
                        continue
                    }
                    else {
                        for (const item in teams[teamScoreboard[i].name].raceResults[races[j]]) {
                            currDriver = item
                            break
                        }
                    }
                }
                else {
                    let minPlace = 22
                    for (const item in teams[teamScoreboard[i].name].raceResults[races[j]]) {
                        if (teams[teamScoreboard[i].name].raceResults[races[j]][item].placement < minPlace) {
                            minPlace = teams[teamScoreboard[i].name].raceResults[races[j]][item].placement
                            currDriver = item
                        }
                    }

                    if (DRIVER_NUM === 1) {
                        for (const item in teams[teamScoreboard[i].name].raceResults[races[j]]) {
                            if (currDriver !== item) {
                                currDriver = item
                                break
                            }
                        }
                    }
                }

                teamStandingsRace.innerHTML = teams[teamScoreboard[i].name].raceResults[races[j]][currDriver].placement === 21 ? 'DNF' : teams[teamScoreboard[i].name].raceResults[races[j]][currDriver].placement
                if (teams[teamScoreboard[i].name].raceResults[races[j]][currDriver].placement === 1) {
                    teamStandingsRace.style.backgroundColor = '#ffffbf'
                }
                else if (teams[teamScoreboard[i].name].raceResults[races[j]][currDriver].placement === 2) {
                    teamStandingsRace.style.backgroundColor = '#dfdfdf'
                }
                else if (teams[teamScoreboard[i].name].raceResults[races[j]][currDriver].placement === 3) {
                    teamStandingsRace.style.backgroundColor = '#ffdf9f'
                }
                else if (teams[teamScoreboard[i].name].raceResults[races[j]][currDriver].placement <= 10) {
                    teamStandingsRace.style.backgroundColor = '#dfffdf'
                }
                else if (teams[teamScoreboard[i].name].raceResults[races[j]][currDriver].placement === 21) {
                    teamStandingsRace.style.backgroundColor = '#efcfff'
                }
                else {
                    teamStandingsRace.style.backgroundColor = '#cfcfff'
                }

                if (sprintRaces.has(races[j]) && teams[teamScoreboard[i].name].raceResults[races[j]][currDriver].sprintResult <= sprintPoints.length) teamStandingsRace.innerHTML += `<sup><b>&nbsp;${teams[teamScoreboard[i].name].raceResults[races[j]][currDriver].sprintResult}</b></sup>`
                if (teams[teamScoreboard[i].name].raceResults[races[j]][currDriver].fastestLap) teamStandingsRace.innerHTML += '<sup>&nbsp;F&nbsp;</sup>'

                teamStandingsRow.appendChild(teamStandingsRace)
            }

            if (DRIVER_NUM === 0) {
                const teamStandingsPoints = document.createElement('td')
                teamStandingsPoints.innerHTML = teamScoreboard[i].points
                teamStandingsPoints.classList = 'font-bold text-center'
                teamStandingsPoints.rowSpan = '2'
                teamStandingsRow.appendChild(teamStandingsPoints)
            }

            teamStandingsBody.appendChild(teamStandingsRow)
        }
    }
}

// dragging

let dragging = false
let movingobject, mX, mY, oX, oY, movingId, fastestLap, fastestLapDriver

document.body.onmousedown = function (e) {
    if (!movingobject && e.target.className.includes('block')) {
        const dragger = e.target.cloneNode(true)
        dragger.className += ' dragging'
        let raceID = e.target.className.substring(0, e.target.className.indexOf(' '))
        const divID = `${raceID}_container`
        document.getElementById(divID).appendChild(dragger)
        movingobject = document.querySelector('.dragging')
        e.target.className += ' placeholder'
        oX = mX - e.target.getBoundingClientRect().left
        oY = mY - e.target.getBoundingClientRect().top
        movingobject.style.left = (mX-oX-document.getElementById('all_race_container').scrollLeft)+'px'
        movingobject.style.top = (mY-oY)+'px'
        movingId = e.target

        if (raceID.includes("sprint")) {
            raceID = raceID.substring(0, 7)
        }

        if (!document.getElementById(`${raceID}_includeRace`).checked) {
            document.getElementById(`${raceID}_includeRace`).checked = true
            changeIncludeRace(raceID, true)
        }

        const drivers = document.querySelectorAll(`.${raceID}`)
        for (let i = 0; i < drivers.length; i++) {
            if (document.getElementById(`${raceID}_fastestlap_place${i}`).style.opacity === '1') {
                if (drivers[i] === e.target) {
                    fastestLap = true
                }
                fastestLapDriver = drivers[i]
                break
            }
        }
    }
}

document.body.onmouseup = function(e){
    if (movingobject && movingobject.className.includes('dragging')) {
        const raceName = movingobject.className.substring(0, movingobject.className.indexOf(' '))
        const divID = raceName + '_container'
        document.getElementById(divID).removeChild(movingobject)
        document.querySelector('.placeholder').className = document.querySelector('.placeholder').className.slice(0, -12)

        fixPlaceNumbers(raceName)
        changeRaceOrder(raceName)
    }
    movingobject = ''
    fastestLapDriver = ''
    fastestLap = false
}

document.body.onmousemove = function(e){
    mX = e.clientX
    mY = e.clientY
    if (movingobject) {
        const raceName = movingobject.className.substring(0, movingobject.className.indexOf(' '))
        const className = '.' + raceName
        movingobject.style.left = (mX-oX+document.getElementById('all_race_container').scrollLeft)+'px'
        movingobject.style.top = (mY-oY)+'px'
        const raceNameID = raceName.includes("sprint") ? `${raceName.substring(0, raceName.length-6)}_name_container` : `${raceName}_name_container`
        const offset = mY >= document.getElementById(`${raceName}_dnfText`).getBoundingClientRect().top ? document.getElementById(`${raceName}_dnfText`).getBoundingClientRect().bottom - document.getElementById(`${raceName}_dnfText`).getBoundingClientRect().top : 0
        let newHover = Math.floor((Number(movingobject.style.top.replace('px','')) - document.getElementById(raceNameID).offsetHeight - document.getElementById(`${raceName}_raceText`).offsetHeight - offset) / 25)
        newHover += offset > 0 ? 1 : 0
        if (newHover >= document.querySelectorAll(className).length) {
            newHover = document.querySelectorAll(className).length-1
        }
        if (newHover < 0) {
            swapSibling(document.querySelectorAll(className)[0], movingId)
        }
        else {
            swapSibling(movingId, document.querySelectorAll(className)[newHover])
        }

        if (!raceName.includes("sprint")) {
            const fastestLapQuery = document.querySelectorAll(`.${raceName}_fastestLap`)
            for (let i = 0; i < fastestLapQuery.length; i++) {
                document.getElementById(`${raceName}_fastestlap_place${i}`).style.opacity = document.getElementById(`${raceName}_fastestlap_place${i}`).innerHTML === '-' ? '0' : '0.1'
            }
            // if (fastestLap) {
            //     const driversQuery = document.querySelectorAll(`.${raceName}`)
            //     for (let i = 0; i < driversQuery.length; i++) {
            //         if (movingId === driversQuery[i]) {
            //             document.getElementById(`${raceName}_fastestlap_place${i}`).style.opacity = '1'
            //             break
            //         }
            //     }
            // }
            // else {
                const driversQuery = document.querySelectorAll(`.${raceName}`)
                for (let i = 0; i < driversQuery.length; i++) {
                    if (driversQuery[i] === fastestLapDriver) {
                        document.getElementById(`${raceName}_fastestlap_place${i}`).style.opacity = '1'
                        break
                    }
                }
            // }
        }

        fixPlaceNumbers(raceName)
    }
}

function swapSibling(node1, node2) {
    node1.parentNode.replaceChild(node1, node2)
    node1.parentNode.insertBefore(node2, node1)
}

function fixPlaceNumbers(raceName) {
    const racers = document.querySelectorAll(`.${raceName}`)
    let dnfFound = false
    for (let i = 0; i < 21; i++) {
        if (racers[i].id === `${raceName}_dnfText`) {
            document.getElementById(`${raceName}_place${i}`).innerHTML = '-'
            document.getElementById(`${raceName}_place${i}`).classList = `text-xs font-bold text-center opacity-0 ${raceName}_placementClass`
            document.getElementById(`${raceName}_place${i}`).style = ''

            if (!raceName.includes("sprint")) {
                document.getElementById(`${raceName}_fastestlap_place${i}`).innerHTML = '-'
                document.getElementById(`${raceName}_fastestlap_place${i}`).classList = `text-xs font-bold opacity-0 text-center ${raceName}_fastestLap`
                document.getElementById(`${raceName}_fastestlap_place${i}`).style = ''
            }

            dnfFound = true
        }
        else {
            document.getElementById(`${raceName}_place${i}`).innerHTML = dnfFound ? '-' : i+1
            document.getElementById(`${raceName}_place${i}`).classList = `font-bold text-center race${raceName}_placementClass`
            document.getElementById(`${raceName}_place${i}`).style = 'margin-top: 1px; margin-bottom: 1px;'

            if (!raceName.includes("sprint")) {
                document.getElementById(`${raceName}_fastestlap_place${i}`).innerHTML = ''
                document.getElementById(`${raceName}_fastestlap_place${i}`).classList = `cursor-pointer ${raceName}_fastestLap`
                document.getElementById(`${raceName}_fastestlap_place${i}`).style = racers[i] === fastestLapDriver ? 'background-image: url("fastest_lap.svg"); background-size: contain; width: 24px; height: 24px; margin-top: 1px; margin-bottom: 1px; opacity: 1;' : 'background-image: url("fastest_lap.svg"); background-size: contain; width: 24px; height: 24px; margin-top: 1px; margin-bottom: 1px; opacity: 0.1'
            }
        }
    }
}
