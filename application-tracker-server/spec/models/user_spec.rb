require 'rails_helper'

RSpec.describe User, type: :model do
  let(:valid_user) { create(:valid_user) }
  let(:valid_user2) { create(:valid_user2) }

  it 'is valid with a username, email, and password' do
    expect(valid_user).to be_valid
  end

  it 'encryptes the password' do
    expect(valid_user.password_digest).to_not eq('123')
  end

  it 'is invalid with a mismatched password' do
    expect(build(:valid_user, password_confirmation: '321')).to_not be_valid
  end

  it 'is invalid with a blank password' do
    expect(build(:valid_user, password: '')).to_not be_valid
  end

  it 'is invalid with a null email' do
    expect(build(:valid_user, email: nil)).to_not be_valid
  end

  it 'is invalid with a null username' do
    expect(build(:valid_user, username: nil)).to_not be_valid
  end

  it 'is invalid with a null password' do
    expect(build(:valid_user, password: nil)).to_not be_valid
  end

  it 'is invalid with a blank email' do
    expect(build(:valid_user, email: '')).to_not be_valid
  end

  it 'is invalid with a blank username' do
    expect(build(:valid_user, username: '')).to_not be_valid
  end

  it 'is invalid with a blank password' do
    expect(build(:valid_user, password: '')).to_not be_valid
  end

  context 'when another user has taken an email' do
    before do
      valid_user
    end

    it 'is invalid with the same email as the other user' do
      expect(build(:valid_user2, email: 'Test@123.com')).to_not be_valid
    end

    it 'is invalid with the same email as the other user in a different case' do
      expect(build(:valid_user2, email: 'test@123.com')).to_not be_valid
    end
  end

  context 'when authenticate is called on the class with a valid email and password' do
    before do
      valid_user
    end
    let(:subject) { User.authenticate(email: 'Test@123.com', password: '123') }

    it 'returns the user' do
      expect(subject).to eq(valid_user)
    end
  end

  context 'when authenticate is called on the class with a valid email but invalid password' do
    before do
      valid_user
    end
    let(:subject) { User.authenticate(email: 'Test@123.com', password: '321') }

    it 'returns nil' do
      expect(subject).to eq(nil)
    end
  end

  context 'when authenticate is called on the class with a invalid email' do
    before do
      valid_user
    end
    let(:subject) { User.authenticate(email: 'est@123.com', password: '123') }

    it 'returns nil' do
      expect(subject).to eq(nil)
    end
  end

  context 'when sesssion info is called on the user a user' do
    let(:subject) { valid_user.session_info }

    it "returns a hash that contains the id" do
      expect(subject["id"]).to eq(valid_user.id)
    end

    it "returns a hash that contains the username" do
      expect(subject["username"]).to eq(valid_user.username)
    end
  end
end
