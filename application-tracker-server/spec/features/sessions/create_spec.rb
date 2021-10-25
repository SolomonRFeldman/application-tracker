require 'rails_helper'

describe 'Users Features', type: :feature do
  after do
    Capybara.current_session.driver.browser.clear_cookies
  end

  let(:valid_user) { create(:valid_user) }
  before do
    valid_user
  end

  context 'when valid email and password is posted to signin' do
    before do
      page.driver.submit :post, signin_path, user: attributes_for(:valid_user).slice(:email, :password)
    end
    it 'returns status 200' do
      expect(page.status_code).to eq(200)
    end

    it 'returns the user id and username in json format' do
      resp = JSON.parse(page.body)
      expect(resp['id']).to eq(valid_user.id)
      expect(resp['username']).to eq(valid_user.username)
    end

    it 'creates a signed cookie with the user id' do
      cookies = ActionDispatch::Request.new(page.driver.request.env).cookie_jar
      expect(cookies.signed[:user][:id]).to eq(valid_user.id)
    end
  end

  context 'when an invalid password is posted to signup' do
    before do
      page.driver.submit :post, signin_path, user: attributes_for(:valid_user, password: '321').slice(:email, :password)
    end

    it 'returns status 401, unauthorized' do
      expect(page.status_code).to eq(401)
    end

    it 'returns the authentication error' do
      resp = JSON.parse(page.body)
      expect(resp).to include('errors')
      expect(resp['errors'].first['title']).to eq('Invalid email or password')
      expect(resp['errors'].first['status']).to eq('401')
    end
  end
end
