
# Carolina Admin #

```yml
app:
  carolinaAdminApp:
    app: carolina/apps/admin
    mount: 'admin'
    db: main
```

The admin app provides the admin panel. It provides an admin interface
to all models for all of your registered apps.

**Name and Mount Point**

Carolina Admin must to be mounted at `/admin` and should be named
`carolinaAdminApp`.

**Interactions**

All models belonging to properly registered apps will be manageable here.
