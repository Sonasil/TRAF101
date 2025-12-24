export const questions = [
    // SIGNS (8)
    {
        id: 's1',
        licenseTypeIds: ['A', 'B', 'C', 'D', 'EH'],
        category: 'Signs',
        difficulty: 'easy',
        prompt: 'What does a red octagonal sign indicate?',
        options: [
            { id: 'o1', text: 'Stop completely' },
            { id: 'o2', text: 'Yield' },
            { id: 'o3', text: 'No entry' },
            { id: 'o4', text: 'School zone' }
        ],
        correctOptionIds: ['o1'],
        explanation: 'A red octagon always means STOP. You must come to a complete halt.',
        image: 'stop_sign'
    },
    {
        id: 's2',
        licenseTypeIds: ['A', 'B', 'C', 'D', 'EH'],
        category: 'Signs',
        difficulty: 'easy',
        prompt: 'What does a triangular sign with a red border usually mean?',
        options: [
            { id: 'o1', text: 'Information' },
            { id: 'o2', text: 'Warning' },
            { id: 'o3', text: 'Prohibition' },
            { id: 'o4', text: 'Mandatory' }
        ],
        correctOptionIds: ['o2'],
        explanation: 'Triangular signs with red borders are warning signs.'
    },
    {
        id: 's3',
        licenseTypeIds: ['A', 'B', 'C', 'D', 'EH'],
        category: 'Signs',
        difficulty: 'medium',
        prompt: 'A round blue sign with a white arrow generally indicates:',
        options: [
            { id: 'o1', text: 'A warning' },
            { id: 'o2', text: 'A forbidden action' },
            { id: 'o3', text: 'A mandatory direction' },
            { id: 'o4', text: 'A tourist attraction' }
        ],
        correctOptionIds: ['o3'],
        explanation: 'Blue circles usually indicate mandatory actions, like "turn left".'
    },
    {
        id: 's4',
        licenseTypeIds: ['A', 'B', 'C', 'D', 'EH'],
        category: 'Signs',
        difficulty: 'medium',
        prompt: 'What does a circular sign with a red border and specific image inside mean?',
        options: [
            { id: 'o1', text: 'Prohibition (Not allowed)' },
            { id: 'o2', text: 'Permission' },
            { id: 'o3', text: 'Information' },
            { id: 'o4', text: 'Route confirmation' }
        ],
        correctOptionIds: ['o1'],
        explanation: 'Red circles indicate prohibitions, e.g., No Left Turn.'
    },
    {
        id: 's5',
        licenseTypeIds: ['A', 'B', 'C', 'D', 'EH'],
        category: 'Signs',
        difficulty: 'hard',
        prompt: 'A diamond shaped sign, usually yellow or orange, indicates:',
        options: [
            { id: 'o1', text: 'Speed limit' },
            { id: 'o2', text: 'Construction or Warning' },
            { id: 'o3', text: 'Hospital nearby' },
            { id: 'o4', text: 'Rest area' }
        ],
        correctOptionIds: ['o2'],
        explanation: 'Diamond signs are typically used for warnings or construction zones.'
    },
    {
        id: 's6',
        licenseTypeIds: ['C', 'D', 'EH'],
        category: 'Signs',
        difficulty: 'medium',
        prompt: 'A sign showing a truck with a red line through it means:',
        options: [
            { id: 'o1', text: 'Truck parking only' },
            { id: 'o2', text: 'No trucks allowed' },
            { id: 'o3', text: 'Trucks have priority' },
            { id: 'o4', text: 'Weigh station ahead' }
        ],
        correctOptionIds: ['o2'],
        explanation: 'A red slash or line through a symbol means that action or vehicle is prohibited.'
    },
    {
        id: 's7',
        licenseTypeIds: ['A', 'B', 'C', 'D', 'EH'],
        category: 'Signs',
        difficulty: 'easy',
        prompt: 'What does an inverted triangle (point down) sign mean?',
        options: [
            { id: 'o1', text: 'Stop' },
            { id: 'o2', text: 'Yield (Give Way)' },
            { id: 'o3', text: 'Parking' },
            { id: 'o4', text: 'Dead end' }
        ],
        correctOptionIds: ['o2'],
        explanation: 'The inverted triangle is universally the Yield or Give Way sign.'
    },
    {
        id: 's8',
        licenseTypeIds: ['A', 'B', 'C', 'D', 'EH'],
        category: 'Signs',
        difficulty: 'hard',
        prompt: 'What does a sign with a white horizontal bar on a red round background mean?',
        options: [
            { id: 'o1', text: 'Stop' },
            { id: 'o2', text: 'No Entry' },
            { id: 'o3', text: 'Do not pass' },
            { id: 'o4', text: 'End of restriction' }
        ],
        correctOptionIds: ['o2'],
        explanation: 'This specific sign is for "No Entry" for vehicular traffic.'
    },

    // SPEED LIMITS (8)
    {
        id: 'sp1',
        licenseTypeIds: ['B'],
        category: 'Speed Limits',
        difficulty: 'medium',
        prompt: 'What is the general speed limit in built-up urban areas (unless otherwise posted) in TRNC?',
        options: [
            { id: 'o1', text: '30 km/h' },
            { id: 'o2', text: '50 km/h' },
            { id: 'o3', text: '65 km/h' },
            { id: 'o4', text: '80 km/h' }
        ],
        correctOptionIds: ['o2'],
        explanation: 'The standard urban speed limit is 50 km/h unless signs say otherwise.'
    },
    {
        id: 'sp2',
        licenseTypeIds: ['B', 'A'],
        category: 'Speed Limits',
        difficulty: 'medium',
        prompt: 'On intercity main roads, what is the usual maximum speed limit for cars?',
        options: [
            { id: 'o1', text: '80 km/h' },
            { id: 'o2', text: '100 km/h' },
            { id: 'o3', text: '120 km/h' },
            { id: 'o4', text: 'No limit' }
        ],
        correctOptionIds: ['o2'],
        explanation: 'It is typically 100 km/h on main highways, but check signs.'
    },
    {
        id: 'sp3',
        licenseTypeIds: ['C', 'D', 'EH'],
        category: 'Speed Limits',
        difficulty: 'hard',
        prompt: 'Heavy vehicles (trucks/buses) usually have a lower speed limit than cars. On a 100 km/h road, they may be limited to:',
        options: [
            { id: 'o1', text: '100 km/h' },
            { id: 'o2', text: '90 km/h' },
            { id: 'o3', text: '75 km/h' },
            { id: 'o4', text: '60 km/h' }
        ],
        correctOptionIds: ['o3'],
        explanation: 'Heavy vehicles are generally restricted to lower speeds, often 75-80 km/h depending on the specific road.'
    },
    {
        id: 'sp4',
        licenseTypeIds: ['A', 'B', 'C', 'D', 'EH'],
        category: 'Speed Limits',
        difficulty: 'easy',
        prompt: 'If you see a speed limit sign of 65 km/h, this means:',
        options: [
            { id: 'o1', text: 'You must drive exactly 65 km/h' },
            { id: 'o2', text: 'Minimum speed is 65 km/h' },
            { id: 'o3', text: 'Maximum speed is 65 km/h' },
            { id: 'o4', text: 'Recommended speed is 65 km/h' }
        ],
        correctOptionIds: ['o3'],
        explanation: 'Red circle speed signs indicate the MAXIMUM legal speed.'
    },
    {
        id: 'sp5',
        licenseTypeIds: ['A', 'B', 'C', 'D', 'EH'],
        category: 'Speed Limits',
        difficulty: 'medium',
        prompt: 'When passing a school during operational hours, the speed limit is often reduced to:',
        options: [
            { id: 'o1', text: '30 km/h' },
            { id: 'o2', text: '50 km/h' },
            { id: 'o3', text: '20 km/h' },
            { id: 'o4', text: '40 km/h' }
        ],
        correctOptionIds: ['o1'],
        explanation: 'School zones typically have a 30 km/h limit for safety.'
    },
    {
        id: 'sp6',
        licenseTypeIds: ['B'],
        category: 'Speed Limits',
        difficulty: 'easy',
        prompt: 'Driving too slowly on a high-speed road can be:',
        options: [
            { id: 'o1', text: 'Safe' },
            { id: 'o2', text: 'Dangerous and illegal' },
            { id: 'o3', text: 'Recommended for fuel saving' },
            { id: 'o4', text: 'Allowed in any lane' }
        ],
        correctOptionIds: ['o2'],
        explanation: 'Impeding traffic flow by driving too slowly is dangerous and considered an offense.'
    },
    {
        id: 'sp7',
        licenseTypeIds: ['A', 'B'],
        category: 'Speed Limits',
        difficulty: 'medium',
        prompt: 'Does bad weather affect the legal speed limit?',
        options: [
            { id: 'o1', text: 'No, the sign is the only rule' },
            { id: 'o2', text: 'Yes, you must adjust speed to conditions' },
            { id: 'o3', text: 'Only if police are present' },
            { id: 'o4', text: 'Only at night' }
        ],
        correctOptionIds: ['o2'],
        explanation: 'You must always adapt speed to road and weather conditions, regardless of the posted max limit.'
    },
    {
        id: 'sp8',
        licenseTypeIds: ['C', 'EH'],
        category: 'Speed Limits',
        difficulty: 'hard',
        prompt: 'When towing a trailer, your maximum speed limit is:',
        options: [
            { id: 'o1', text: 'Same as without trailer' },
            { id: 'o2', text: 'Typically lower than the vehicle limit' },
            { id: 'o3', text: 'Always 50 km/h' },
            { id: 'o4', text: 'Unlimited' }
        ],
        correctOptionIds: ['o2'],
        explanation: 'Towing a trailer reduces stability and braking, so lower limits apply.'
    },

    // RIGHT OF WAY (8)
    {
        id: 'rw1',
        licenseTypeIds: ['A', 'B', 'C', 'D', 'EH'],
        category: 'Right of Way',
        difficulty: 'hard',
        prompt: 'At an uncontrolled intersection (no signs/lights), who generally has the right of way in TRNC (driving on left)?',
        options: [
            { id: 'o1', text: 'Vehicle from the left' },
            { id: 'o2', text: 'Vehicle from the right' },
            { id: 'o3', text: 'Vehicle moving faster' },
            { id: 'o4', text: 'Larger vehicle' }
        ],
        correctOptionIds: ['o2'],
        explanation: 'In TRNC (like UK/Cyprus), you generally give way to traffic from the RIGHT at roundabouts/uncontrolled junctions.'
    },
    {
        id: 'rw2',
        licenseTypeIds: ['A', 'B', 'C', 'D', 'EH'],
        category: 'Right of Way',
        difficulty: 'medium',
        prompt: 'When entering a roundabout, you must give way to:',
        options: [
            { id: 'o1', text: 'Traffic entering from the left' },
            { id: 'o2', text: 'Traffic already in the roundabout (coming from right)' },
            { id: 'o3', text: 'You have priority entering' },
            { id: 'o4', text: 'Traffic exiting' }
        ],
        correctOptionIds: ['o2'],
        explanation: 'Give way to traffic approaching from the right, which is already on the roundabout.'
    },
    {
        id: 'rw3',
        licenseTypeIds: ['A', 'B', 'C', 'D', 'EH'],
        category: 'Right of Way',
        difficulty: 'easy',
        prompt: 'A pedestrian is waiting at a zebra crossing. You should:',
        options: [
            { id: 'o1', text: 'Speed up to pass before them' },
            { id: 'o2', text: 'Honk to warn them' },
            { id: 'o3', text: 'Stop and let them cross' },
            { id: 'o4', text: 'Drive around them' }
        ],
        correctOptionIds: ['o3'],
        explanation: 'Pedestrians have absolute priority at zebra crossings.'
    },
    {
        id: 'rw4',
        licenseTypeIds: ['A', 'B', 'C', 'D', 'EH'],
        category: 'Right of Way',
        difficulty: 'medium',
        prompt: 'Three cars arrive at a 4-way stop at the same time. Who goes first?',
        options: [
            { id: 'o1', text: 'The one turning left' },
            { id: 'o2', text: 'The one going straight' },
            { id: 'o3', text: 'Courteous communication or right-hand rule' },
            { id: 'o4', text: 'The newest car' }
        ],
        correctOptionIds: ['o3'],
        explanation: 'Usually right-of-way rules apply, or drivers wave each other. Generally give way to right.'
    },
    {
        id: 'rw5',
        licenseTypeIds: ['A', 'B', 'C', 'D', 'EH'],
        category: 'Right of Way',
        difficulty: 'hard',
        prompt: 'You are on a minor road approaching a major road with a stop sign. You typically:',
        options: [
            { id: 'o1', text: 'Slow down and merge' },
            { id: 'o2', text: 'Stop only if cars are coming' },
            { id: 'o3', text: 'Stop completely, check, then proceed' },
            { id: 'o4', text: 'Honk and go' }
        ],
        correctOptionIds: ['o3'],
        explanation: 'A stop sign means a mandatory full stop.'
    },
    {
        id: 'rw6',
        licenseTypeIds: ['A', 'B', 'C', 'D', 'EH'],
        category: 'Right of Way',
        difficulty: 'medium',
        prompt: 'When an emergency vehicle with lights/sirens approaches, you must:',
        options: [
            { id: 'o1', text: 'Stop immediately where you are' },
            { id: 'o2', text: 'Speed up to get out of the way' },
            { id: 'o3', text: 'Pull over safely to the side and stop' },
            { id: 'o4', text: 'Ignore if on the other side' }
        ],
        correctOptionIds: ['o3'],
        explanation: 'Safely clear the path by pulling over.'
    },
    {
        id: 'rw7',
        licenseTypeIds: ['A', 'B', 'C', 'D', 'EH'],
        category: 'Right of Way',
        difficulty: 'medium',
        prompt: 'If you want to turn right at a junction, and there is oncoming traffic turning left (to the same road), who yields?',
        options: [
            { id: 'o1', text: 'You (turning right across traffic)' },
            { id: 'o2', text: 'They (turning left)' },
            { id: 'o3', text: 'First come first serve' },
            { id: 'o4', text: 'Larger vehicle' }
        ],
        correctOptionIds: ['o1'],
        explanation: 'Turning across traffic (right turn in TRNC/UK driving) yields to oncoming traffic going straight or left.'
    },
    {
        id: 'rw8',
        licenseTypeIds: ['A', 'B', 'C', 'D', 'EH'],
        category: 'Right of Way',
        difficulty: 'easy',
        prompt: 'A flashing yellow traffic light means:',
        options: [
            { id: 'o1', text: 'Stop' },
            { id: 'o2', text: 'Proceed with caution' },
            { id: 'o3', text: 'Go as fast as you can' },
            { id: 'o4', text: 'Traffic light is broken, do not enter' }
        ],
        correctOptionIds: ['o2'],
        explanation: 'Flashing yellow means proceed with care/yield.'
    },

    // TRAFFIC RULES (8)
    {
        id: 'tr1',
        licenseTypeIds: ['A', 'B', 'C', 'D', 'EH'],
        category: 'Traffic Rules',
        difficulty: 'easy',
        prompt: 'Which side of the road do you drive on in TRNC?',
        options: [
            { id: 'o1', text: 'Right' },
            { id: 'o2', text: 'Left' },
            { id: 'o3', text: 'Middle' },
            { id: 'o4', text: 'Depends on the city' }
        ],
        correctOptionIds: ['o2'],
        explanation: 'TRNC drives on the LEFT.'
    },
    {
        id: 'tr2',
        licenseTypeIds: ['A', 'B', 'C', 'D', 'EH'],
        category: 'Traffic Rules',
        difficulty: 'medium',
        prompt: 'Is it legal to use a handheld mobile phone while driving?',
        options: [
            { id: 'o1', text: 'Yes, for short calls' },
            { id: 'o2', text: 'Yes, if traffic is stopped' },
            { id: 'o3', text: 'No, it is strictly prohibited' },
            { id: 'o4', text: 'Only for maps' }
        ],
        correctOptionIds: ['o3'],
        explanation: 'Handheld usage is banned. Hands-free is usually allowed but caution advised.'
    },
    {
        id: 'tr3',
        licenseTypeIds: ['B', 'C', 'D'],
        category: 'Traffic Rules',
        difficulty: 'medium',
        prompt: 'Seat belts are mandatory for:',
        options: [
            { id: 'o1', text: 'Driver only' },
            { id: 'o2', text: 'Front seat passengers only' },
            { id: 'o3', text: 'Everyone in the vehicle' },
            { id: 'o4', text: 'Nobody, it is optional' }
        ],
        correctOptionIds: ['o3'],
        explanation: 'All occupants must wear seat belts.'
    },
    {
        id: 'tr4',
        licenseTypeIds: ['A'],
        category: 'Traffic Rules',
        difficulty: 'easy',
        prompt: 'What safety equipment is mandatory for motorcycle riders?',
        options: [
            { id: 'o1', text: 'Helmet' },
            { id: 'o2', text: 'Knee pads' },
            { id: 'o3', text: 'Leather jacket' },
            { id: 'o4', text: 'Gloves' }
        ],
        correctOptionIds: ['o1'],
        explanation: 'A certified helmet is mandatory for rider and passenger.'
    },
    {
        id: 'tr5',
        licenseTypeIds: ['A', 'B', 'C', 'D', 'EH'],
        category: 'Traffic Rules',
        difficulty: 'hard',
        prompt: 'What is the legal blood alcohol limit for standard drivers in TRNC?',
        options: [
            { id: 'o1', text: '0 mg' },
            { id: 'o2', text: '50 mg (0.05%)' },
            { id: 'o3', text: '100 mg' },
            { id: 'o4', text: 'It depends on your weight' }
        ],
        correctOptionIds: ['o2'],
        explanation: 'Usually 50mg/100ml (0.05%), similar to many European countries. Zero tolerance for professional drivers typically applies.'
    },
    {
        id: 'tr6',
        licenseTypeIds: ['A', 'B', 'C', 'D', 'EH'],
        category: 'Traffic Rules',
        difficulty: 'medium',
        prompt: 'When can you overtake on the left?',
        options: [
            { id: 'o1', text: 'Never, we drive on left' },
            { id: 'o2', text: 'Anytime' },
            { id: 'o3', text: 'Only if the car in front signals right' },
            { id: 'o4', text: 'Usually you overtake on the right in TRNC' }
        ],
        correctOptionIds: ['o4'],
        explanation: 'Since driving is on the left, overtaking is done on the RIGHT. Passing on the left (undertaking) is dangerous/illegal unless traffic is in lanes.'
    },
    {
        id: 'tr7',
        licenseTypeIds: ['A', 'B', 'C', 'D', 'EH'],
        category: 'Traffic Rules',
        difficulty: 'medium',
        prompt: 'Double white solid lines in the center of the road mean:',
        options: [
            { id: 'o1', text: 'You can park' },
            { id: 'o2', text: 'No overtaking or crossing' },
            { id: 'o3', text: 'Overtaking permitted both ways' },
            { id: 'o4', text: 'Slow down' }
        ],
        correctOptionIds: ['o2'],
        explanation: 'Solid double lines act as a wall; do not cross.'
    },
    {
        id: 'tr8',
        licenseTypeIds: ['A', 'B', 'C', 'D', 'EH'],
        category: 'Traffic Rules',
        difficulty: 'medium',
        prompt: 'If you miss your exit on a highway:',
        options: [
            { id: 'o1', text: 'Reverse back carefully' },
            { id: 'o2', text: 'Make a U-turn' },
            { id: 'o3', text: 'Continue to the next exit' },
            { id: 'o4', text: 'Stop and wait' }
        ],
        correctOptionIds: ['o3'],
        explanation: 'Never reverse on a highway. Go to the next exit.'
    },

    // DRIVING DUTIES (8)
    {
        id: 'dd1',
        licenseTypeIds: ['B', 'C', 'D', 'EH'],
        category: 'Driving Duties',
        difficulty: 'easy',
        prompt: 'Before a long trip, what should you check?',
        options: [
            { id: 'o1', text: 'Tire pressure, oil, water, lights' },
            { id: 'o2', text: 'Radio station' },
            { id: 'o3', text: 'Car color' },
            { id: 'o4', text: 'Only fuel' }
        ],
        correctOptionIds: ['o1'],
        explanation: 'Vehicle check (POWER: Petrol, Oil, Water, Electrics, Rubber) is essential.'
    },
    {
        id: 'dd2',
        licenseTypeIds: ['A', 'B', 'C', 'D', 'EH'],
        category: 'Driving Duties',
        difficulty: 'medium',
        prompt: 'If you feel tired while driving:',
        options: [
            { id: 'o1', text: 'Turn up music' },
            { id: 'o2', text: 'Open the window' },
            { id: 'o3', text: 'Stop, park safely, and rest' },
            { id: 'o4', text: 'Drive faster to arrive sooner' }
        ],
        correctOptionIds: ['o3'],
        explanation: 'Fatigue kills. The only cure is sleep/rest.'
    },
    {
        id: 'dd3',
        licenseTypeIds: ['A', 'B', 'C', 'D', 'EH'],
        category: 'Driving Duties',
        difficulty: 'medium',
        prompt: 'When queueing in traffic at night, you should:',
        options: [
            { id: 'o1', text: 'Use high beams' },
            { id: 'o2', text: 'Use handbrake and avoid dazzling rear driver with brake lights' },
            { id: 'o3', text: 'Turn off all lights' },
            { id: 'o4', text: 'Honk' }
        ],
        correctOptionIds: ['o2'],
        explanation: 'Keeping foot on brake dazzles the driver behind. Use handbrake.'
    },
    {
        id: 'dd4',
        licenseTypeIds: ['C', 'D', 'EH'],
        category: 'Driving Duties',
        difficulty: 'hard',
        prompt: 'Professional drivers must take mandatory breaks. For example, after 4.5 hours driving:',
        options: [
            { id: 'o1', text: 'Take a 45 min break' },
            { id: 'o2', text: 'Keep driving' },
            { id: 'o3', text: '5 min break' },
            { id: 'o4', text: 'Change drivers while moving' }
        ],
        correctOptionIds: ['o1'],
        explanation: 'Regulations (like EU/AETR often adopted) usually require 45 min break after 4.5 hours.'
    },
    {
        id: 'dd5',
        licenseTypeIds: ['A', 'B', 'C', 'D', 'EH'],
        category: 'Driving Duties',
        difficulty: 'easy',
        prompt: 'If your car breaks down, the first thing to securing the scene is:',
        options: [
            { id: 'o1', text: 'Panic' },
            { id: 'o2', text: 'Turn on hazard warning lights' },
            { id: 'o3', text: 'Open the trunk' },
            { id: 'o4', text: 'Stand in the road' }
        ],
        correctOptionIds: ['o2'],
        explanation: 'Hazards warn others immediately.'
    },
    {
        id: 'dd6',
        licenseTypeIds: ['A', 'B', 'C', 'D', 'EH'],
        category: 'Driving Duties',
        difficulty: 'medium',
        prompt: 'Hydroplaning (aquaplaning) occurs when tires lose contact with road due to water. What should you do?',
        options: [
            { id: 'o1', text: 'Brake hard' },
            { id: 'o2', text: 'Steer violently' },
            { id: 'o3', text: 'Ease off accelerator, hold steering straight' },
            { id: 'o4', text: 'Accelerate' }
        ],
        correctOptionIds: ['o3'],
        explanation: 'Do not brake or turn suddenly. Ease off gas.'
    },
    {
        id: 'dd7',
        licenseTypeIds: ['EH'],
        category: 'Driving Duties',
        difficulty: 'hard',
        prompt: 'When carrying hazardous loads, where should documents be kept?',
        options: [
            { id: 'o1', text: 'In the trunk' },
            { id: 'o2', text: 'In a fire-retardant bag/holder in the cab' },
            { id: 'o3', text: 'At home' },
            { id: 'o4', text: 'In your pocket' }
        ],
        correctOptionIds: ['o2'],
        explanation: 'Emergency services need quick access to load info if there is an accident.'
    },
    {
        id: 'dd8',
        licenseTypeIds: ['A', 'B', 'C', 'D', 'EH'],
        category: 'Driving Duties',
        difficulty: 'medium',
        prompt: 'What constitutes defensive driving?',
        options: [
            { id: 'o1', text: 'Driving aggressively to prevent being cut off' },
            { id: 'o2', text: 'Anticipating hazards and errors of others' },
            { id: 'o3', text: 'Driving extremely slow' },
            { id: 'o4', text: 'Using the horn frequently' }
        ],
        correctOptionIds: ['o2'],
        explanation: 'Defensive driving means being ready for others mistakes.'
    }
];
