#!/bin/bash

read -r -p "Enter Instance ID in AWS Systems Manager: " instanceId
echo "Attempting to connect to $instanceId..."
command="aws ssm start-session --target $instanceId"
eval "$command";
