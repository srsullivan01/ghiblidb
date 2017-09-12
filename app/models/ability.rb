class Ability
  include CanCan::Ability

  def initialize(user)
    user ||= User.new # guest user (not logged in)
   can :read, Comment

   can [:create, :update, :destroy], Comment do |comment|
     comment.user == user
   end

  end
end
