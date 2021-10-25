require 'rails_helper'

describe 'Users Features', type: :feature do
  let(:valid_user_hash) { attributes_for(:valid_user) }

  context 'when valid user data is posted to signup' do
    before do
      page.driver.submit :post, signup_path, user: valid_user_hash
    end

    it 'returns status 200' do
      expect(page.status_code).to eq(200)
    end

    it 'creates the user' do
      expect(User.find_by(username: 'Test')).to_not be_nil
    end

    it 'returns the user id and username in a json format' do
      resp = JSON.parse(page.body)
      expect(resp['id']).to eq(User.find_by(username: valid_user_hash[:username]).id)
      expect(resp['username']).to eq(valid_user_hash[:username])
    end
  end
end
