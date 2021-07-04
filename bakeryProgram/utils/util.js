function formatDate(datetime) {
    var year = datetime.getFullYear();
    var month = ("0" + (datetime.getMonth() + 1)).slice(-2);
    var date = ("0" + datetime.getDate()).slice(-2);
    var hour = ("0" + datetime.getHours()).slice(-2);
    var minute = ("0" + datetime.getMinutes()).slice(-2);
    var second = ("0" + datetime.getSeconds()).slice(-2);
    var result = year + "-"+ month +"-"+ date +" "+ hour +":"+ minute +":" + second;
    return result;
};

function formatLocation(longitude, latitude) {
  if (typeof longitude === 'string' && typeof latitude === 'string') {
    longitude = parseFloat(longitude)
    latitude = parseFloat(latitude)
  }

  longitude = longitude.toFixed(2)
  latitude = latitude.toFixed(2)

  return {
    longitude: longitude.toString().split('.'),
    latitude: latitude.toString().split('.')
  }
}

module.exports = {
  formatDate: formatDate,
  formatLocation: formatLocation
}
