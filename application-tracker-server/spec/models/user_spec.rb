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

end
