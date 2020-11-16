FROM python:3.6

# Add the external tasks directory into /locust-tasks
RUN mkdir locust-tasks
ADD . locust-tasks
WORKDIR /locust-tasks/src

# Install the required dependencies via pip
RUN pip install -r ../requirements.txt

# Set script to be executable
RUN chmod 755 run.sh

# Expose the required Locust ports
EXPOSE 8089

# Start Locust
ENTRYPOINT ["./run.sh"]
