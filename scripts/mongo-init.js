db.createUser({
  user: 'root',
  pwd: 'fight123',
  roles: [
    {
      role: 'readWrite',
      db: 'fight-party-db',
    },
  ],
});
