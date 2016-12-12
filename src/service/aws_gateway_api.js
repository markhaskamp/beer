import $ from 'jquery';


export function getAllBeers(callback) {
    console.log('aws_gateway_api.js. getAllBeers. enter');
    var data = { 'httpMethod': 'GET',
                 'queryStringParameters': {
                    'TableName': 'beer'
                 }
               };

    callAPIGateway(data, callback);
}

export function addBeer(rating, name, brewery, type, notes, callback) {
    console.log('aws_gateway_api.js. addBeer. enter');
    var data = {'httpMethod': 'POST',
                'body': {
                    'TableName': 'beer',
                    'Item': {
                        'rate':    rating,
                        'name':    name,
                        'brewery': brewery,
                        'type':    type,
                        'notes':   notes
                    }
                }
               };

    callAPIGateway(data, callback)
}

function callAPIGateway(data, callback) {

    $.ajax({
        url: 'https://00vc9g0bma.execute-api.us-east-1.amazonaws.com/prod/beer',
        type: 'POST',
        crossDomain: true,
        data: JSON.stringify(data),
        headers: {'X-Api-Key': 'the key'},
        dataType: 'json',
        contentType: "application/json",
        success: function(data) {
            callback(data);
        },
        error: function(data) {
            console.log('error');
            console.info(data);
        }
    });
}
