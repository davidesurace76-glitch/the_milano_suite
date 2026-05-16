import re
import json

with open("airbnb_page.html", "r") as f:
    html = f.read()

# Try to find JSON chunks containing reviews
matches = re.findall(r'"reviewsData":\s*({.*?})', html)
for match in matches:
    print("reviewsData", match)

matches2 = re.findall(r'"localizedRating":"([0-9,]+)"', html)
print("Ratings:", matches2)
