# running

Have WSL and Ubuntu installed. Have redis installed and running.
```sh
# these two commands only need to be executed once
sudo apt update
sudo apt install redis-server

sudo service redis-server start
```

You will also need node >16.x installed. Purge any old installations you have and install the latest from the official node site (windows build).

## Install dependencies for frontend

These commands only need to be executed once as well.

```sh
cd frontend
npm install
```

make sure you're back in the root folder after running the previous command.

```sh
dotnet watch -- run serve
```

### Files of interest
https://github.com/senkawa/livinglab-mod3-wip/blob/master/Models/Blog.cs
https://github.com/senkawa/livinglab-mod3-wip/blob/master/Models/Post.cs
https://github.com/senkawa/livinglab-mod3-wip/blob/master/Commands/ServeCommand.cs#L42-L51
