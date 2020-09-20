var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2100",
        "ok": "2068",
        "ko": "32"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "3",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "15892",
        "ok": "15892",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "5432",
        "ok": "5516",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "4067",
        "ok": "4041",
        "ko": "0"
    },
    "percentiles1": {
        "total": "3505",
        "ok": "3548",
        "ko": "0"
    },
    "percentiles2": {
        "total": "8585",
        "ok": "8618",
        "ko": "0"
    },
    "percentiles3": {
        "total": "15398",
        "ok": "15400",
        "ko": "0"
    },
    "percentiles4": {
        "total": "15743",
        "ok": "15744",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 82,
        "percentage": 4
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 4,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 1982,
        "percentage": 94
    },
    "group4": {
        "name": "failed",
        "count": 32,
        "percentage": 2
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "123.529",
        "ok": "121.647",
        "ko": "1.882"
    }
},
contents: {
"req_get-c5558": {
        type: "REQUEST",
        name: "Get",
path: "Get",
pathFormatted: "req_get-c5558",
stats: {
    "name": "Get",
    "numberOfRequests": {
        "total": "2100",
        "ok": "2068",
        "ko": "32"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "3",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "15892",
        "ok": "15892",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "5432",
        "ok": "5516",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "4067",
        "ok": "4041",
        "ko": "0"
    },
    "percentiles1": {
        "total": "3505",
        "ok": "3548",
        "ko": "0"
    },
    "percentiles2": {
        "total": "8585",
        "ok": "8618",
        "ko": "0"
    },
    "percentiles3": {
        "total": "15398",
        "ok": "15400",
        "ko": "0"
    },
    "percentiles4": {
        "total": "15743",
        "ok": "15744",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 82,
        "percentage": 4
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 4,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 1982,
        "percentage": 94
    },
    "group4": {
        "name": "failed",
        "count": 32,
        "percentage": 2
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "123.529",
        "ok": "121.647",
        "ko": "1.882"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
