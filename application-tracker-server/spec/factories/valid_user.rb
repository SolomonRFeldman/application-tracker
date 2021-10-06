FactoryBot.define do

  factory :valid_user, class: User do
    username { 'Test' }
    email { 'Test@123.com' }
    password { '123' }
  end

  factory :valid_user2, class: User do
    username { 'Jelly' }
    email { 'Jelly@fish.com' }
    password { 'fish' }
  end

end
