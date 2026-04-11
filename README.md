# HiFi Proxied API

The HiFi API proxied through Scramjet and can be hosted statically on domains like AWS S3 and GCS.


## Usage

If you are deploying this to a domain like AWS S3 or Google Cloud Storage, please update the paths in the code to your bucket name.

Please update the Wisp URL in config.js to your own Wisp server. This project does not come with a usable Wisp URL and therefore must be set.

If you would like to change the HiFi API that is being proxied, that can be found in handle.js. Please note, other API's hosted may have stricter hosting and firewalls causing this to get blocked. 

The recommended API's to use are these below:

api.studentsneed.help

hfapi.aluratech.org

hfapi.dyamuh.dev

## I'm too lazy to deploy this
You do not have to deploy this to use it. We have an instance already hosted on Google Cloud Storage that can be plugged into development or any Monochrome instance. To use this in Monochrome, navigate to settings => instances then add a custom "API Instance" and a custom "Streaming Instance" and set it to the URL below:

https://storage.googleapis.com/hifiapi/index.html

## Dependencies Used
This project uses the following:

Binimum's HiFi API (binimum/hifi-api)

Scramjet (MercuryWorkshop/scramjet)

BareMux (MercuryWorkshop/bare-mux)

Epoxy-TLS (MercuryWorkshop/epoxy-tls)

Wisp Server Python (MercuryWorkshop/wisp-server-python)

