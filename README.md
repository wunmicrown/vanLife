issue enconter after deployed  with netllify
============================================
after refreshed the page, the page is saying "site not found"
I have tried to fix this by adding the following to my project:

1.  Added my " homepage deployment link "  to the "package.json" file Eg:
"homepage": "https://homepage deployment link.netlify.app",

2. create a "_redirects" file in the "public" folder and add the following line:
    "/* /index.html  200"