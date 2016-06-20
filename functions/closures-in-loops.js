var users = []

for(var i = 0; i < 10; i++) {
  var userID = i;

  var user = {
    id: userID,
    save: function() {
      console.log(`user ${userID} saved`)
    }
  }

  users.push(user)
}

users[0].save()
users[1].save()
users[2].save()
users[3].save()
users[4].save()
users[5].save()
users[6].save()
users[7].save()
users[8].save()
users[9].save()
