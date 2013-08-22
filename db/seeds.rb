User.delete_all

['Erich Gamma', 'Richard Helm', 'Ralph Johnson', 'John Vlissides'].each do |name|
  User.create! name: name
end