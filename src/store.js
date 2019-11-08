import { observable, computed } from 'mobx'
import Cookie from 'js-cookie'
import _ from 'lodash'

const cookieData = Cookie.get('memberList')

class Member {
  @observable id
  @observable name
  @observable maxScore
  @observable active

  constructor({id, name, maxScore}) {
    this.id = id || Date.now()
    this.name = name
    this.maxScore = maxScore
    this.active = true
  }
}

class Members {
  @observable memberList = []

  constructor() {
    if (cookieData) {
      const memberList = JSON.parse(cookieData)
      memberList.forEach(memberData => this.memberList.push(new Member(memberData)))
    }
  }

  @computed get isEmptyMembers() {
    return _.isEmpty(this.memberList)
  }

  addMember = (name, maxScore) => {
    this.memberList.push(new Member({name, maxScore}))
  }

  removeMember = member => {
    const filteredList = this.memberList.filter(item => item !== member)
    this.memberLists.replace(filteredList)
  }
}

const members = new Members()

export { members }