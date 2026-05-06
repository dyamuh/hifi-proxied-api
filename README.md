# HiFi Proxied API

The HiFi API proxied through Scramjet and can be hosted statically on domains like AWS S3 and GCS.

Why use this? In a school, university or workplace, if you find a Monochrome instance that is not blocked by the network filter, you still wouldn't be able to use it because the API instances that Monochrome uses are blocked on most network filters. By using this, you can deploy the API to a domain like storage.googleapis.com or s3.amazonaws.com and it wouldn't be blocked because many popular websites rely on these domains. If you don't want to deploy it, please scroll down to the 2nd section.


## Usage

If you are deploying this to a domain like AWS S3 or Google Cloud Storage, please update the paths in the code to your bucket name.

Please update the Wisp URL in config.js to your own Wisp server. This project does not come with a usable Wisp URL and therefore must be set.

If you would like to change the HiFi API that is being proxied, that can be found in handle.js. Please note, other API's hosted may have stricter hosting and firewalls causing this to get blocked. 

The recommended API'(s) to use are these below:

dyamuh.dev/hfapi

Or official Monochrome API's:

api.monochrome.tf

eu-central.monochrome.tf

us-west.monochrome.tf

PLEASE NOTE: OFFICIAL MONOCHROME API's ARE NOT RECOMMENDED DUE TO CLOUDFLARE PROXYING. USE AT YOUR OWN RISK.

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

