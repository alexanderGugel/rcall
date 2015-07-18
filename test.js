function rcall (lib) {
  var func = null
  var thisArg = null
  var args = []
  var result = null

  return function (commands, callback) {
    var i = 0
    var len = commands.length

    while (i < len) {
      func = commands[i++]
      thisArg = commands[i++]
      args.length = commands[i++]

      result = func.apply(thisArg, args)

      callback(null, result)

      i++
    }
  }
}

// function createChannel (source) {
//   if (typeof source === 'function')
// }

// rcall.createChannel = Channel

var interpret = rcall(document)

interpret(['hello', 'world'])

// rcall.createChannel(function () {
//
// })


// var response = "self.onmessage=function(e){postMessage('Worker: '+e.data)}"
//
// var blob
//
// var Blob = window.Blob
// var BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder
// var Worker = window.Worker
// var URL = window.URL || window.webkitURL
//
// try {
//   blob = new Blob([response], { type: 'application/javascript' })
// } catch (e) {
//   blob = new BlobBuilder()
//   blob.append(response)
//   blob = blob.getBlob()
// }
//
// var objectURL = URL.createObjectURL(blob)
//
// var worker = new Worker(objectURL)
//
// // Test, used in all examples:
// worker.onmessage = function (e) {
//   alert('Response: ' + e.data)
// }
// worker.postMessage('Test')
