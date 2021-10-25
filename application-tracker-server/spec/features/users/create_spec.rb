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

  context 'when invalid user data is posted to signup' do
    let(:invalid_user_hash) do
      {
        username: '',
        email: '',
        password: '',
        password_confirmation: nil
      }
    end
    let(:errored_user) { User.create(invalid_user_hash).errors }

    before do
      page.driver.submit :post, signup_path, user: invalid_user_hash
    end

    it 'returns status 400' do
      expect(page.status_code).to eq(400)
    end

    it 'returns the creation errors' do
      resp = JSON.parse(page.body)
      expect(resp).to include('errors')
      expect(resp['errors']['username']).to eq(errored_user[:username])
      expect(resp['errors']['email']).to eq(errored_user[:email])
      expect(resp['errors']['password']).to eq(errored_user[:password])
      expect(resp['errors']['password_confirmation']).to eq(errored_user[:password_confirmation])
    end
  end
end
