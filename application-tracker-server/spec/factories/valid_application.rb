FactoryBot.define do

  factory :valid_application, class: Application do
    organization_name { 'Test Org' }
    purpose { 'Test Job' }
    date_applied { '2021-10-06T19:56:59.849Z' }
    url { 'http://localhost:3000/' }
    status { 'pending' }
  end

end