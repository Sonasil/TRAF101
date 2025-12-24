export const studyData = [
    // -------------------------------------------------------------------------
    // 1. TRAFFIC COMPREHENSIVE SIGNS (Replaced with specific TRNC list)
    // -------------------------------------------------------------------------
    {
        id: 'signs',
        title: 'Traffic Signs & Markings',
        // TRNC signs follow European standards (Vienna Convention) mostly.
        description: 'Complete guide to Road Signs in Northern Cyprus.',
        icon: '🛑',
        topics: [
            {
                id: 's-warning',
                title: 'Warning Signs (Triangle)',
                count: '40+',
                image: '⚠️',
                content: 'Triangular signs with a red border warn drivers of potential dangers ahead.',
                tip: 'Slow down immediately when you see a triangle.',
                signs: [
                    { name: 'Dangerous Bend (Left/Right)', type: 'warning', icon: '↱' }, // Simple unicode reps
                    { name: 'Double Dangerous Bend', type: 'warning', icon: '↯' },
                    { name: 'Steep Descent (10%)', type: 'warning', icon: '10% 📉' },
                    { name: 'Steep Ascent (10%)', type: 'warning', icon: '10% 📈' },
                    { name: 'Road Narrows', type: 'warning', icon: '><' },
                    { name: 'Traffic Signals', type: 'warning', icon: '🚦' },
                    { name: 'Roundabout Ahead', type: 'warning', icon: '🔄' },
                    { name: 'Two-way Traffic', type: 'warning', icon: '⇅' },
                    { name: 'Pedestrian Crossing', type: 'warning', icon: '🚶' },
                    { name: 'School Zone (Children)', type: 'warning', icon: '🚸' },
                    { name: 'Roadworks', type: 'warning', icon: '👷' },
                    { name: 'Slippery Road', type: 'warning', icon: '🚗≈' },
                    { name: 'Animals (Wild)', type: 'warning', icon: '🦌' },
                    { name: 'Falling Rocks', type: 'warning', icon: '🏔️' },
                    { name: 'Side Winds', type: 'warning', icon: '💨' }
                ]
            },
            {
                id: 's-prohibitory',
                title: 'Prohibitory Signs (Red Circle)',
                image: '🚫',
                content: 'Circular signs with a Red Border tell you what you MUST NOT do.',
                tip: 'Disobeying these is a direct traffic offense.',
                signs: [
                    { name: 'No Entry', type: 'no-entry', icon: '⛔' }, // Special shape
                    { name: 'No Motor Vehicles', type: 'prohibitory', icon: '🚗❌' },
                    { name: 'No Motorcycles', type: 'prohibitory', icon: '🏍️❌' },
                    { name: 'No Left Turn', type: 'prohibitory', icon: '↰❌' },
                    { name: 'No Right Turn', type: 'prohibitory', icon: '↱❌' },
                    { name: 'No U-Turn', type: 'prohibitory', icon: '↷❌' },
                    { name: 'No Overtaking', type: 'prohibitory', icon: '🚗🚗❌' },
                    { name: 'Maximum Speed 30', type: 'speed', icon: '30' },
                    { name: 'Maximum Speed 50', type: 'speed', icon: '50' },
                    { name: 'Maximum Speed 65', type: 'speed', icon: '65' },
                    { name: 'Maximum Speed 80', type: 'speed', icon: '80' },
                    { name: 'Maximum Speed 100', type: 'speed', icon: '100' },
                    { name: 'No Horns', type: 'prohibitory', icon: '🎺❌' },
                    { name: 'Stop (Customs/Police)', type: 'prohibitory', icon: '👮' }
                ]
            },
            {
                id: 's-mandatory',
                title: 'Mandatory Signs (Blue Circle)',
                image: '🔵',
                content: 'Blue circles give positive instructions. You MUST follow them.',
                tip: 'Blue = DO THIS.',
                signs: [
                    { name: 'Turn Left', type: 'mandatory', icon: '⬅️' },
                    { name: 'Turn Right', type: 'mandatory', icon: '➡️' },
                    { name: 'Ahead Only', type: 'mandatory', icon: '⬆️' },
                    { name: 'Roundabout (Clockwise)', type: 'mandatory', icon: '🔄' },
                    { name: 'Keep Left', type: 'mandatory', icon: '↙️' },
                    { name: 'Minimum Speed 30', type: 'mandatory', icon: '30' }
                ]
            },
            {
                id: 's-priority',
                title: 'Priority Signs',
                image: '⚠️',
                content: 'Signs that regulate who goes first at intersections.',
                tip: 'These are the most critical signs for safety.',
                signs: [
                    { name: 'STOP', type: 'stop', icon: 'STOP' },
                    { name: 'GIVE WAY (Yield)', type: 'yield', icon: '▽' },
                    { name: 'Priority Road (Diamond)', type: 'priority-road', icon: '◆' },
                    { name: 'End of Priority', type: 'end-priority', icon: '◆❌' },
                    { name: 'Priority over oncoming', type: 'prio-over', icon: '⬆️' },
                    { name: 'Give way to oncoming', type: 'give-oncoming', icon: '⬇️' }
                ]
            },
            {
                id: 's-info',
                title: 'Information Signs',
                image: 'ℹ️',
                content: 'Rectangular signs giving information, directions, or facilities.',
                tip: 'Usually Blue or Green.',
                signs: [
                    { name: 'Parking', type: 'info', icon: '🅿️' },
                    { name: 'One Way', type: 'info', icon: '⬆️' },
                    { name: 'Dead End', type: 'info', icon: 'T' },
                    { name: 'Hospital', type: 'info', icon: 'H' },
                    { name: 'Bus Stop', type: 'info', icon: '🚌' },
                    { name: 'Pedestrian Crossing', type: 'info', icon: '🚶' } // Blue square version
                ]
            }
        ]
    },

    // -------------------------------------------------------------------------
    // 2. TRAFFIC RULES (Preserved & Refined)
    // -------------------------------------------------------------------------
    {
        id: 'rules',
        title: 'Rules of the Road',
        description: 'The laws you must obey.',
        icon: '⚖️',
        topics: [
            { id: 'r-gen', title: 'Driving Side', image: '🚗', content: 'Drive on the LEFT. Overtake on the RIGHT.', tip: 'Roundabouts are Clockwise.' },
            { id: 'r-row', title: 'Right of Way', image: '🚥', content: 'Give way to traffic from the RIGHT at uncontrolled junctions and roundabouts.', tip: 'Right hand rule applies.' },
            { id: 'r-lights', title: 'Traffic Lights', image: '🚦', content: 'Red: Stop. \nRed+Amber: Get Ready. \nGreen: Go. \nAmber: Stop if safe.\nFlashing Amber: Proceed with caution (Yield).', tip: 'Flashing Amber = Yield Sign.' },
            { id: 'r-park', title: 'Parking Rules', image: '🅿️', content: 'Do not park on double yellow lines. Do not park against logic (facing traffic flow).', tip: 'Never block a hydrant.' }
        ]
    },

    // -------------------------------------------------------------------------
    // 3. VEHICLE SAFETY
    // -------------------------------------------------------------------------
    {
        id: 'safety',
        title: 'Safety & Operations',
        description: 'Defensive driving and maintenance.',
        icon: '🛡️',
        topics: [
            { id: 'v-dsssm', title: 'Cockpit Drill', image: '💺', content: 'Doors, Seat, Steering, Seatbelt, Mirrors.', tip: 'Every trip.' },
            { id: 'v-power', title: 'Maintenance', image: '🔧', content: 'Petrol, Oil, Water, Electrics, Rubber.', tip: 'Weekly checks.' },
            { id: 'v-dist', title: 'Safe Distance', image: '📏', content: 'Dry: 2 Seconds.\nWet: 4 Seconds.\nIcy: 10 Seconds.', tip: 'Only a fool breaks the 2-second rule.' }
        ]
    },

    // -------------------------------------------------------------------------
    // 4. EMERGENCIES
    // -------------------------------------------------------------------------
    {
        id: 'emergency',
        title: 'Emergencies',
        description: 'Accidents and Breakdowns.',
        icon: '🚑',
        topics: [
            { id: 'e-acc', title: 'Accidents', image: '💥', content: 'Stop. Warn. Help. Call 112/155.', tip: 'Do not move injured people.' },
            { id: 'e-break', title: 'Breakdowns', image: '⚠️', content: 'Hazard lights on. Warning triangle 45m back.', tip: 'Safety first.' }
        ]
    },

    // -------------------------------------------------------------------------
    // 5. LEGAL
    // -------------------------------------------------------------------------
    {
        id: 'legal',
        title: 'Legal & Penalties',
        description: 'Fines and Limits.',
        icon: '👮',
        topics: [
            { id: 'l-alc', title: 'Alcohol Limit', image: '🍷', content: '50mg (0.05%) limit.', tip: 'Zero tolerance is best.' },
            { id: 'l-doc', title: 'Documents', image: '📄', content: 'License, Insurance, Registration, Tax.', tip: 'Carry them always.' }
        ]
    }
];
