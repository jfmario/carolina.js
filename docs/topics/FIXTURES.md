
# Fixtures #

Fixtures provide a way for you to seed your database with certain information.
To create a fixture, place a `.yml` file (with no spaces in the name) in the
`fixtures` directory. The format for a fixture file is like so:

```yml
appName:
  modelName1:
    - fields:
        fieldName1: value
        fieldName2: value
      hashFields:
        fieldName3: valueToBeHashed
      fileFields:
        fieldName4: path/from/files/to/data.md
    - fields:
        fieldName1: value
        fieldName2: value
      hashFields:
        fieldName3: valueToBeHashed
      fileFields:
        fieldName4: path/from/files/to/data.md
  modelName2:
    - fields:
        fieldName1: value
appName2:
  modelName3:
    - fields:
        fieldName1: value
```

For the app name, use the app name as specified for the app in `config.yml`.
Then for each model you want to create fixtures for, create lists of objects.
There are three valid parameters: `fields`, `hashFields`, and `fileFields`.

For `fields`, the value will be placed as is into the database
(after being interpreted by the schema (so dates will be cast)).

For `hashFields`, the value will be hashed using the secrets specified in your
site configuration and placed into the database.

for `fileFields`, Carolina will look in `fixtures/files/` for the specified file
and read the contents of that file into the database.

**Loading Fixtures**

When you run the command `carolina loaddata`, all `.yml` files in the `fixtures`
directory will be loaded. If a specified field is the index field and there is
already an entry in the database with that value, it will be overridden.

In some cases, you may want to have different fixtures ready to be loaded
for different environments. To run a specific fixture, use
`carolina loaddata -d fixture_name`. If you run that exact command,
Carolina will load the fixture in the file `fixture_name.yml`.
