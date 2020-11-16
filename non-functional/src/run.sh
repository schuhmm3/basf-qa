#!/bin/bash

LOCUST="locust -f locust.py"
LOCUS_OPTS="$OPTS"

echo "$LOCUST $LOCUS_OPTS"

$LOCUST $LOCUS_OPTS