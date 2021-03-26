var RAW = {
    class1: {
        teoricas: [],
        praticas: "",
        laboratoriais: ""
    },
    class2: {
        teoricas:[] ,
        praticas: "",
        laboratoriais: ""
    },
    class3: {
        teoricas: [],
        praticas: "",
        laboratoriais: ""
    },
    class4: {
        teoricas: [],
        praticas: "",
        laboratoriais: ""
    },
    class5: {
        teoricas: [],
        praticas: "",
        laboratoriais: ""
    }
};


class Classes {

    constructor() {}

    /**
     * 
     * @param {string} cName 
     * @param {string} cType 
     */
    fetch(cName, cType) {
        cName = cName.toUpperCase();
        cType = cType.toLowerCase();
        let response = null;
        if ((RAW[cName] != undefined) && (RAW[cName][cType] != undefined))
            response = RAW[cName][cType];
        return response;
    }
}

module.exports.Classes = Classes;
