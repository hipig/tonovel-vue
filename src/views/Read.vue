<template>
  <div class="max-w-5xl mx-auto px-2 sm:px-6 lg:px-8 mt-8 pb-8">
    <div class="transition transform sticky top-0 inset-x-0 z-10">
      <div class="rounded-tl-md rounded-tr-md relative">
        <div class="py-2 px-4" :class="$store.getters['setting/themeSet'].toolTheme">
          <div class="flex items-center justify-between flex-wrap">
            <div class="flex-shrink-0">
              <div class="rounded-md shadow-sm">
                <a href="#" class="flex items-center justify-center px-4 py-2 border border-transparent text-sm leading-tight font-medium rounded-lg bg-white hover:text-gray-600 focus:outline-none focus:shadow-outline transition ease-in-out duration-150">
                  上一章
                </a>
              </div>
            </div>
            <div class="w-full flex-1 flex items-center justify-center">
              <div class="flex">
                <div class="flex">
                  <div v-clickoutside="listClickOutside" class="px-4">
                    <div @click="listShow = !listShow" class="flex flex-col items-center justify-center cursor-pointer">
                      <svg viewBox="0 0 20 20" class="w-5 h-5 fill-current">
                        <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"/>
                      </svg>
                      <span class="text-sm">目录</span>
                    </div>
                    <transition
                      enter-class="transform opacity-0 scale-95"
                      enter-active-class="transition ease-out duration-100"
                      enter-to-class="transform opacity-100 scale-100"
                      leave-class="transform opacity-100 scale-100"
                      leave-active-class="transition ease-in duration-75"
                      leave-to-class="transform opacity-0 scale-95"
                    >
                      <div class="origin-top absolute right-0 mt-2 w-full z-50" v-show="listShow">
                        <div class="rounded-md shadow-lg bg-white px-6 py-4 max-h-96 overflow-y-auto">
                          <h3 class="text-center text-lg mb-4 text-gray-500">全部章节</h3>
                          <div class="flex flex-wrap w-full border-t border-dashed">
                            <div class="flex w-full sm:w-1/3 border-b border-dashed">
                              <a href="#" class="text-sm hover:text-gray-800 hover:underline py-2">第1531章 女帝的去向</a>
                            </div>
                            <div class="flex w-full sm:w-1/3 border-b border-dashed">
                              <a href="#" class="text-sm hover:text-gray-800 hover:underline py-2">第1531章 女帝的去向</a>
                            </div>
                            <div class="flex w-full sm:w-1/3 border-b border-dashed">
                              <a href="#" class="text-sm hover:text-gray-800 hover:underline py-2">第1531章 女帝的去向</a>
                            </div>
                            <div class="flex w-full sm:w-1/3 border-b border-dashed">
                              <a href="#" class="text-sm hover:text-gray-800 hover:underline py-2">第1531章 女帝的去向</a>
                            </div>
                            <div class="flex w-full sm:w-1/3 border-b border-dashed">
                              <a href="#" class="text-sm hover:text-gray-800 hover:underline py-2">第1531章 女帝的去向</a>
                            </div>
                            <div class="flex w-full sm:w-1/3 border-b border-dashed">
                              <a href="#" class="text-sm hover:text-gray-800 hover:underline py-2">第1531章 女帝的去向</a>
                            </div>
                            <div class="flex w-full sm:w-1/3 border-b border-dashed">
                              <a href="#" class="text-sm hover:text-gray-800 hover:underline py-2">第1531章 女帝的去向</a>
                            </div>
                            <div class="flex w-full sm:w-1/3 border-b border-dashed">
                              <a href="#" class="text-sm hover:text-gray-800 hover:underline py-2">第1531章 女帝的去向</a>
                            </div>
                            <div class="flex w-full sm:w-1/3 border-b border-dashed">
                              <a href="#" class="text-sm hover:text-gray-800 hover:underline py-2">第1531章 女帝的去向</a>
                            </div>
                            <div class="flex w-full sm:w-1/3 border-b border-dashed">
                              <a href="#" class="text-sm hover:text-gray-800 hover:underline py-2">第1531章 女帝的去向</a>
                            </div>
                            <div class="flex w-full sm:w-1/3 border-b border-dashed">
                              <a href="#" class="text-sm hover:text-gray-800 hover:underline py-2">第1531章 女帝的去向</a>
                            </div>
                            <div class="flex w-full sm:w-1/3 border-b border-dashed">
                              <a href="#" class="text-sm hover:text-gray-800 hover:underline py-2">第1531章 女帝的去向</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </transition>
                  </div>
                  <div @click="settingShow = !settingShow" v-clickoutside="settingClickOutside" class="px-4">
                    <div class="flex flex-col items-center justify-center cursor-pointer">
                      <svg viewBox="0 0 20 20" class="w-5 h-5 fill-current">
                        <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"/>
                      </svg>
                      <span class="text-sm">设置</span>
                    </div>
                    <transition
                      enter-class="transform opacity-0 scale-95"
                      enter-active-class="transition ease-out duration-100"
                      enter-to-class="transform opacity-100 scale-100"
                      leave-class="transform opacity-100 scale-100"
                      leave-active-class="transition ease-in duration-75"
                      leave-to-class="transform opacity-0 scale-95"
                    >
                      <div class="origin-top absolute right-0 left-0 mt-2 flex justify-center z-50" v-show="settingShow">
                        <setting :theme="$store.state.setting.theme"></setting>
                      </div>
                    </transition>
                  </div>
                  <a href="#" class="flex flex-col items-center justify-center px-4">
                    <svg viewBox="0 0 20 20" class="w-5 h-5 fill-current">
                      <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"/>
                    </svg>
                    <span class="text-sm">书架</span>
                  </a>
                </div>
              </div>
            </div>
            <div class="flex-shrink-0">
              <div class="rounded-md shadow-sm">
                <a href="#" class="flex items-center justify-center px-4 py-2 border border-transparent text-sm leading-tight font-medium rounded-lg bg-white hover:text-gray-600 focus:outline-none focus:shadow-outline transition ease-in-out duration-150">
                  下一章
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="rounded-bl-md rounded-br-md p-6" :class="$store.getters['setting/themeSet'].contentTheme">
      <div class="text-center text-3xl border-b border-dashed text-gray-900 pb-2 mb-4" :class="$store.getters['setting/themeSet'].hrTheme">第1714章 看看故人</div>
      <div class="text-gray-700">
        &nbsp;&nbsp;&nbsp;&nbsp;天谕书院这些天忙碌了起来，萧氏、元泱氏以及紫微界斗氏部族许多强者都在，他们运来许多资源，请动了数位中央帝界强大的空间阵发宗师级人物，在天谕书院铸空间传送大阵。<br>
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;神族一战，虽然三大巅峰人物没有出手只是站在那，但背后意义非凡，也让他们和天谕书院真正处在同一阵营。<br>
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;这正在天谕书院打造的阵法，便将直接连通天谕书院和三大超级势力，以及天谕界各顶尖势力。<br>
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;如此一来，一旦遇到危机，阵发便可直接启动，能够瞬间做到相互驰援。<br>
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;这样的话，天谕书院的地位才能稳固，没有任何一股势力敢轻易招惹。<br>
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;除此之外，三大势力还和太玄道尊以及叶伏天商量，将会让更多的修行之人来天谕书院修行，他们中的后辈人物，以后会将天谕书院当做是主要的修行之地，相互促进，叶伏天自然不会有意见。<br>
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;他建天谕书院的目的，本身便也是希望天谕书院能够成为传道圣地，影响三千大道界的圣地。<br>
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;此外，他们还建造一些其他大阵，都是修行之用，还有防御大阵，不过这种大阵意义实则不是很大，毕竟以如今天谕书院的实力，没有巨头人物根本不可能来惹事。<br>
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;但现在，九界还没有人能够布置出超脱人皇境界的超级大阵，若能够有那样的阵法，三千大道界可以横着走了，毕竟能布置这种阵发的人，本身的实力恐怕就已经站在顶峰，一览众山小。<br>
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;此外，天谕书院还出现一棵求道古树，是斗曌种下的，他将神之遗迹搬来的神树给种在了天谕书院之中。<br>
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;当然，天谕书院继续扩建，是免不了的，毕竟天谕界未来已经可以预见了。<br>
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;神族一战的消息也终于传遍九界，成为至尊九界所有人谈论的话题，这一战之后，各大势力倒是安静了下来，没有再出现太大的波澜。<br>
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;强大如神族，怕是也只能暂时忍这口气，毕竟他们无可奈何。<br>
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;在没有到绝境的情况下，谁都不想一起死。<br>
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;这些天，倒是又有不少人前来天谕书院拜访，自然都是顶尖势力，譬如上霄神宫的强者，还有上霄界的一些势力，神剑李家等，当初前来道贺的太阴界幽月神宫也来人了，而且这次除了神女嫦曦之外，还有幽月神宫的大人物前来拜访。<br>
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;这似乎也能看出天谕书院的地位，从万众瞩目到瞬间衰弱，面临存亡危机，再到名震九界，光芒耀世。<br>
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;很难想象，这一切，仅仅发生在短短的一月时间之内。<br>
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;一个月之后，天谕书院再次招收弟子，这一次，整座天谕城都是修行之人，不知来了多少强者入天谕书院接受考核。<br>
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;伴随着那一战的细节传开，世人已经知道天谕书院诞生了多位完美神轮拥有者，可以想象这会有多强大的吸引力。<br>
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;此时，太玄道尊、叶伏天以及天谕书院的许多大人物站在书院的一座大殿之上，目光眺望前方浩浩荡荡的身影，一片盛况。<br>
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;那里，无数人抬头看向叶伏天。<br>
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;这位率领天谕书院杀入神族的绝代风流人物，带着数位完美神轮人皇横扫神族下位皇，他自己，则碾压神族神昊，如今，许多人称：三千大道界，这一代，叶伏天第一。<br>
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;他的名气，盖过了简青竹、盖过了南天神国南洛神，成为无数少年的偶像，想要成为这样的传奇人物，没有依靠家族、凭借自身天赋，开创一个盛世。<br>
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;双帝一统天下一来，唯叶伏天一人，做到过如此，即便说他是神州一统之后最耀眼的天骄人物，也丝毫不为过。<br>
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;三百多年的历史，实则并没有诞生多少妖孽人物，毕竟时间太短暂，许多都是在之前就已经成名的，若论影响力，的确没有人做到过叶伏天这等地步。<br>
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;弟子的考核自有天谕书院的人忙碌，无需叶伏天过问，如今天谕界各势力的强者也都前来帮忙。<br>
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;此时，虚空中，有璀璨神光降临，许多人抬头看向天穹之上，便见到一行身影出现在上空之地。<br>
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;这让下空之人神色都是一凝，上次天谕书院创建之日，黄金神国和神族强者到来，再加上后面发生的一切，让许多人都有些敏感，不会，又是这两大势力的人吧？<br>
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;叶伏天抬头看向上空之地，看到来人之后露出一抹诧异之色。<br>
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;“晚辈叶伏天见过神使。”叶伏天微微欠身行礼开口说道。<br>
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;“叶皇不必客气，上次天谕书院创建没有来道贺，这次来看看。”为首的老者含笑说道，这一行人，竟然来自虚帝宫。<br>
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;叶伏天曾经在神之遗迹外见过。<br>
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;“多谢神使，请。”叶伏天伸手指引道。<br>
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;虚空中的身影点头，随后一行人降落，来到了叶伏天他们这座大殿之上，太玄道尊以及各大势力的人心中都微有波澜，虚帝宫基本不参与外界发生之事，更是极少出现在各势力。<br>
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;如今，却降临天谕书院。<br>
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;这意义，可是非同寻常。<br>
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;“神使。”太玄道尊以及各势力之人都对着来人微微点头致意，颇为尊敬，毕竟，虚帝宫神使背后站着的人是东凰大帝。<br>
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;“不必都看着我，就当我是来看热闹的。”老者微笑着说道，转过身目光看向远处的身影，含笑道：“大帝当年一统天下之后，兴盛武府学宫等传道之地，希望武道兴旺，叶皇和道尊创建天谕书院，在天谕界传道，乃是大功德一件。”<br>
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;若是寻常传道势力他自然不会在意，但天谕书院已经轰动了九界，如今影响力直逼天神书院了。<br>
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;“前辈谬赞，只是做自己力所能及之事。”叶伏天客气道，不过他能够感觉到对方来应该是好意。<br>
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;而且说起来，上次遗迹之城，也帮过他解围。<br>
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;老者笑了笑：“叶皇谦虚了，如此盛况，世间有几人能够做到。”<br>
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;“的确是大功德。”上霄神宫来的强者也微笑着开口道，上霄神宫的理念是一样的，传道天下。<br>
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;叶伏天笑了笑没有多说什么，总不能跟着自夸。<br>
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;“神使远道而来，我命人备宴，和神使同饮几杯。”叶伏天道。<br>
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;“叶皇不必麻烦，我看看便回。”老人笑着摇头道：“我听说叶皇在神之遗迹中得到了大帝传承？”<br>
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;叶伏天看向神使，随后‘承认’点头。<br>
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;谈不上得到了大帝传承，但这是他有意暴露的，毕竟这是神之遗迹中诸人一同看到的，相比之而言，世界古树的秘密才是不能暴露的，只能以传承来掩盖。<br>
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;“曾见证大帝苏醒，与我产生共鸣，大帝将传承赐予了我，我曾感受诸神的召唤，聆听诸神的意志。”老者喃喃低语，声音缥缈，笑着道：“叶皇之天赋与气魄，令老朽佩服，这般年龄便能如此，叶皇的未来成就，不可估量。”<br>
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;“前辈一直夸赞，晚辈倒是不知说什么了。”叶伏天苦笑道。<br>
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;“行，我也就来走走，看看天谕书院的情况，这边告辞了。”老者开口说了声。<br>
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;“前辈不要误会，晚辈可没有这意思。”叶伏天解释道。<br>
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;“哈哈。”老者笑了笑起身迈步而行道：“以后有机会再会。”<br>
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;说罢他便带着人离开了这边，来去如影。<br>
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;叶伏天笑着摇头，没有介意，他自然明白对方和他的话无关。<br>
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;“虚帝宫神使到来，天谕书院未来很长一段时间，不会有任何麻烦。”太玄道尊开口说了声，叶伏天一愣，看向太玄道尊，不过想到其背后的意义，便也释然。<br>
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;是啊，虚帝宫神使到来，谁知道有没有上面的授意呢？<br>
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;虽然来去匆匆，只是在天谕书院上站了片刻，说了几句话，便足以让天谕书院稳稳的矗立于天谕界了。<br>
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;神族、黄金神国或者其他势力想要动天谕书院，要考虑的事情，更多了。<br>
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;“这么说，倒是欠了神使一个人情。”叶伏天笑着说道。<br>
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;“我先下去了。”叶伏天开口说道，他走下大殿，朝着天谕书院内而行，内心格外的平静。<br>
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;许多事情都陆续解决，终于可以真正的放轻松一段时间了，至少目前看来，没有迫在眉睫的危机了。<br>
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;不知不觉中，又来到了梵净天之人的修行之地。<br>
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;“秦仙子。”梵净天所在的独立行宫，叶伏天找到了秦禾。<br>
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;“叶公子怎么有空来这。”秦禾微笑着开口道。<br>
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;“女皇如今在梵净天做什么？”叶伏天开口问道。<br>
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;“送解语下山之时，女皇便开始了闭关，短时间应该不会出关。”秦禾开口道。<br>
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;“闭关么。”叶伏天点头：“我去看看解语。”<br>
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;说着，他继续往里面而行，来到了花解语修行的地方。<br>
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;花解语目光看向叶伏天。<br>
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;“这些天修行，境界稳固了吗？”叶伏天问道。<br>
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;花解语看着他，轻轻点头。<br>
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;叶伏天走到她身前，露出一抹灿烂笑容：“我想出去走一趟，去看看一些故人，你陪我一起？”<br>
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;花解语神色一滞，看着他的目光露出思索之意，沉默了片刻，随后轻轻点头：“好！”<br>
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;“行，到时候来接你。”叶伏天笑着说了声，随后转身离开这边。
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import clickoutside from '@/utils/clickoutside'
import Setting from '@/components/novel/Setting'

export default {
  directives: {
    clickoutside
  },
  components: {
    Setting
  },
  data () {
    return {
      listShow: false,
      settingShow: false
    }
  },
  methods: {
    listClickOutside () {
      this.listShow = false
    },
    settingClickOutside () {
      this.settingShow = false
    }
  }
}
</script>

<style>

</style>
