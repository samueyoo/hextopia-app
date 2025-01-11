export function checkResourceAmount(resourceName, player) {
    let pGameStateFile;
    switch (player) {
        case "p1": 
            pGameStateFile = "p1Resources.ts";
            break;
        case "p2":
            pGameStateFile = "p2Resources.ts";
            break;
        case "p3":
            pGameStateFile = "p3Resources.ts";
            break;
        case "p4":
            pGameStateFile = "p4Resources.ts";
            break;
        case "p5":
            pGameStateFile = "p5Resources.ts";
            break;
        default: 
            throw new Error('')
    }
    for (let i = 0; i < )
} //need to change how this works since we no longer need to search an array to find a player's resources