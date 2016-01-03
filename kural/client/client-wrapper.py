
import sys
import os
while True:
    query = sys. stdin.readline()
    print "******* queryin for " + query
    print os.popen('node client.js ' + "\"" + query + "\"").read()
    print "******* queryin for " + query
    print "-----------------------------------------"
