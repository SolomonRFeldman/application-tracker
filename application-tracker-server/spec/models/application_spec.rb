require 'rails_helper'

RSpec.describe Application, type: :model do
  let(:valid_user) { create(:valid_user) }
  let(:valid_application) { build(:valid_application, user: valid_user) }

  it 'is valid when built with the valid_application factory and passed a valid user' do
    expect(valid_application).to be_valid
  end

  it 'has a user' do
    expect(valid_application.user).to eq(valid_user) 
  end

  it 'is invalid without a user' do
    expect(build(:valid_application)).to_not be_valid
  end

  it 'is invalid with a null organization_name' do
    expect(build(:valid_application, user: valid_user, organization_name: nil)).to_not be_valid
  end

  it 'is invalid with a null purpose' do
    expect(build(:valid_application, user: valid_user, purpose: nil)).to_not be_valid
  end

  it 'is invalid with a null status' do
    expect(build(:valid_application, user: valid_user, status: nil)).to_not be_valid
  end

  it 'is invalid with a blank organization_name' do
    expect(build(:valid_application, user: valid_user, organization_name: '')).to_not be_valid
  end

  it 'is invalid with a blank purpose' do
    expect(build(:valid_application, user: valid_user, purpose: '')).to_not be_valid
  end

  it 'is invalid with a blank status' do
    expect(build(:valid_application, user: valid_user, status: '')).to_not be_valid
  end

  it 'is invalid with status set to a value not included in the enum def' do
    expect { build(:valid_application, user: valid_user, status: 'bad-enum') }.to raise_error(ArgumentError)
  end

  it 'is valid with status set to "pending"' do
    expect(build(:valid_application, user: valid_user, status: 'pending')).to be_valid
  end

  it 'is valid with status set to "accepted"' do
    expect(build(:valid_application, user: valid_user, status: 'accepted')).to be_valid
  end

  it 'is valid with status set to "declined"' do
    expect(build(:valid_application, user: valid_user, status: 'declined')).to be_valid
  end

end
