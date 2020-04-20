--- Cross-Container Storage ---

-- Volumes --

Create a volume
Usage: docker volume create <volume name>
Example: docker volume create shared-vol

Inspect a volume
Usage: docker volume inspect <volume name>
Example: docker volume inspect shared-vol

Mount a container with a volume using docker run
Usage: --mount source=<volume name>, target=<container dir>
Example:
docker run -it --name=foo --mount source=shared-vol,target=/src/shared ubuntu bash

-- Bind Mounts --

Mount a container with a bind mount using docker run
Usage: --mount type=bind source=<host dir>, target=<container dir>
Example:
docker run -it --name=foo --mount type=bind source=/Users/foo/bindmountdir,target=/src/mountdir ubuntu bash

-- Tmpfs mounts --

Mount a container with a tmpfs mount using docker run
Usage: --mount type=tmpfs, destination=<container dir>
Example:
docker run -it --name=baz --mount type=tmpfs, destination=/tmpdir ubuntu bash