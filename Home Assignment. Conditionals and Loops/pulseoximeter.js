var oxygenSatlevel = 97;
var pulseRateBPM = 90;

function oxygenSatTranslate(oxygenSatlevel) {
    if (oxygenSatlevel >= 95) {
        console.log(`Normal Reading`)
    } else if (oxygenSatlevel == 95) {
        console.log(`Acceptable to continue home monitoring`)
    } else if ((oxygenSatlevel >=92) && (oxygenSatlevel <=94)) {
        console.log(`Seek advice from health professionals.`)
    } else if (oxygenSatlevel <92) {
        console.log(`Seek urgent medical advice.`)
    } else {
        console.log(`that is not a valid o2sat`)
    }
}
oxygenSatTranslate(oxygenSatlevel)

function pulseResultTranslation(pulseRateBPM) {
    if ((pulseRateBPM >= 40) && (pulseRateBPM <=100)) {
        console.log(`Normal Reading`)
    } else if ((pulseRateBPM >=101) && (pulseRateBPM <=109)) {
        console.log(`Acceptable to continue home monitoring.`)
    } else if ((pulseRateBPM >=110) && (pulseRateBPM <=130)) {
        console.log(`Seek advice from health professionals.`)
    } else if (pulseRateBPM >=131) {
        console.log(`Seek urgent medical advice.`)
    } else {
        console.log(`Pulse rate needs to be numerical`)
    }
}
pulseResultTranslation(pulseRateBPM)