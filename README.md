# Setup
## Prerequisite
Here are the items you need to run and start development on this project

* Go 1.8+
* `node` 6.10+ and `npm`
* `dep` - Dependency management for Go
* PostgreSQL

## Database Setup
Go to PostgreSQL command line interface using
```
psql postgres
```

And then create a database named `out_entrepreneurs`
```
create database out_entrepreneurs with owner=<your name>
```

I did mine with
```
create database out_entrepreneurs with owner=cfeng
```

And then in `out-entrepreneurs/server/database.go`, change the user and password field for connecting to your local PostgreSQL instance.

## Server
How to start server?

First go to the server directory of the project
```
cd $GOPATH/src/out-entrepreneurs/server
```

And then run go install
```
go install
```

Now you should have a binary named `server` and you can execute it to start running the server
```
server
```

## Frontend
How to compile and build frontend code?

First go to front end directory of the project
```
cd $GOPATH/src/out-entrepreneurs/server
```

And then run
```
npm install
```

After node modules are installed, the webpack should run, if not, just run it with
```
npm run build
```
