'use strict';

// ======================================================
// =                        语言                        =
// ======================================================
app.factory("Locale", function() {
	var Locale = function(key) {
		if(!key) return "";

		var _lang = Locale.langMap[Locale.lang][key];
		if(_lang) {
			return _lang;
		} else {
			_WARN("LANG", 0, "No Lang:", key);
			return "> " + key;
		}
	};

	Locale.lang = "cn";
	Locale.langMap = {};

	Locale.hasKey = function(key) {
		return !!Locale.langMap[Locale.lang][key];
	};
	// ========================================
	// =                  CN                  =
	// ========================================
	Locale.langMap["cn"] = {
		Home: "首页",
		Unit: "单位",
		Hero: "英雄",
		Ability: "技能",
		Group: "分组",
		Save: "保存",
		Done: "完成",
		Item: "物品",
		Config: "配置",
		Language: "语言",
		Common: "常规",
		SoundAbility: "声音|技能",
		AttackDefenseSpeed: "攻|防|速",
		HPMPVision: "血|法|视野",
		Others: "其他",
		Creature: "生物",
		Wearable: "饰品",
		Default: "默认",
		Unassigned: "未分配",
		Error: "错误",
		Exit: "退出",
		KVEditor: "KV编辑器",
		Inspection: "检测",
		Precache: "预载入",
		Editor: "编辑器",
		ProjectFolder: "项目路径",
		OpenProject: "载入项目",
		RecentProject: "最近打开的项目",
		Warning: "警告",
		Reload: '重载',
		Console: '控制台',
		DeveloperTool: '开发者工具',
		DeleteAbility: "是否要删除",
		DeleteWithModifier: "同时删除技能修饰器相关的多语言描述",

		VersionCheck: "版本检测",
		versionCheckError: "版本检测失败，部分功能将无法使用。请将以下错误信息发送与我，以帮助修复该错误：",

		Key: "键",
		Value: "值",
		Type: "类型",
		Target: "目标",
		NewKV: "新建键值",
		New: "新建",
		FolderName: "文件夹名称",
		Loading: "载入中",
		Name: "名称",
		Comment: "注释",
		Unnamed: "【未命名】",
		NewName: "新名称",
		Rename: "重命名",
		OldName: "原名称",
		ForkLang: "复制多语言描述",
		OriginalModifierName: "原修饰器名称",
		TargetModifierName: "复制修饰器名称",
		NoSpecialValue: "无自定义值",
		NoPrecache: "无预载入值",
		Modifiers: "修饰器",
		AbilitySpecial: "键值",
		Channelled: "持续施法",
		Create: "创建",
		Close: "关闭",

		// 属性
		BaseClass: "基类",
		AbilityTextureName: "图标",
		ScriptFile: "脚本文件",
		AbilityBehavior: "行为",

		AbilityUnitTargetType: "目标类型",
		AbilityUnitTargetTeam: "目标队伍",
		AbilityUnitTargetFlags: "目标标记",
		AbilityUnitDamageType: "伤害类型",

		AbilityType: "技能类型",
		HotKeyOverride: "热键",
		MaxLevel: "最大等级",
		RequiredLevel: "需求等级",
		LevelsBetweenUpgrades: "升级间隔",

		AbilityCastPoint: "施法前摇",
		AbilityCastAnimation: "施法动作",

		AbilityCooldown: "冷却时间",
		AbilityManaCost: "魔法消耗",
		AbilityCastRange: "施法距离",
		AbilityCastRangeBuffer: "施法距离缓冲",

		AbilityChannelTime: "持续施法时间",
		AbilityChannelledManaCostPerSecond: "持续施法每秒耗魔",
		AOERadius: "AOE范围",

		// 属性 - 描述
		"ability_datadriven": "数据驱动技能",
		"ability_lua": "LUA技能",

		"npc_dota_base": "基本",
		"npc_dota_creature": "生物",
		"npc_dota_companion": "同伴",
		"npc_dota_courier": "信使",
		"npc_dota_flying_courier": "飞信信使",
		"npc_dota_fort": "堡垒",
		"npc_dota_thinker": "马甲",
		"npc_dota_building": "建筑",
		"npc_dota_tower": "塔",
		"npc_dota_roshan": "肉山",
		"npc_dota_creep": "爬行",
		"npc_dota_creep_lane": "地面爬行",
		"npc_dota_creep_siege": "围攻爬行",
		"npc_dota_creep_neutral": "中立爬行",
		"npc_dota_ward_base": "基本守卫",
		"npc_dota_ward_base_truesight": "真视守卫",
		"ent_dota_fountain": "泉水",

		"0": "否",
		"1": "是",

		ITEM_FULLY_SHAREABLE: "都可以共享",
		ITEM_FULLY_SHAREABLE_STACKING: "库存共享",
		ITEM_NOT_SHAREABLE: "不可共享",
		ITEM_PARTIALLY_SHAREABLE: "部分共享",

		DECLARE_PURCHASES_IN_SPEECH: "语音",
		DECLARE_PURCHASES_TO_SPECTATORS: "观众",
		DECLARE_PURCHASES_TO_TEAMMATES: "播音员",

		component: "组件",
		rare: "稀有(蓝)",
		epic: "史诗(紫)",
		common: "常见(绿)",
		consumable: "消耗品(白)",
		secret_shop: "神秘商店(青蓝)",
		artifact: "神器(橙)",

		DOTA_ITEM_DISASSEMBLE_ALWAYS: "可拆分",
		DOTA_ITEM_DISASSEMBLE_NEVER: "不可拆分",

		DOTA_ABILITY_BEHAVIOR_IMMEDIATE: "立即",
		DOTA_ABILITY_BEHAVIOR_HIDDEN: "隐藏",
		DOTA_ABILITY_BEHAVIOR_PASSIVE: "被动",
		DOTA_ABILITY_BEHAVIOR_NO_TARGET: "无目标",
		DOTA_ABILITY_BEHAVIOR_UNIT_TARGET: "目标",
		DOTA_ABILITY_BEHAVIOR_POINT: "点",
		DOTA_ABILITY_BEHAVIOR_AOE: "范围",
		DOTA_ABILITY_BEHAVIOR_CHANNELLED: "持续施法",
		DOTA_ABILITY_BEHAVIOR_NOT_LEARNABLE: "不可学习",
		DOTA_ABILITY_BEHAVIOR_ITEM: "物品？",
		DOTA_ABILITY_BEHAVIOR_TOGGLE: "开关",
		DOTA_ABILITY_BEHAVIOR_DIRECTIONAL: "方向",
		DOTA_ABILITY_BEHAVIOR_AUTOCAST: "自动施法",
		DOTA_ABILITY_BEHAVIOR_NOASSIST: "无辅助网格",
		DOTA_ABILITY_BEHAVIOR_AURA: "光环（无用）",
		DOTA_ABILITY_BEHAVIOR_ATTACK: "法球",
		DOTA_ABILITY_BEHAVIOR_DONT_RESUME_MOVEMENT: "不恢复移动",
		DOTA_ABILITY_BEHAVIOR_ROOT_DISABLES: "定身无法释放",
		DOTA_ABILITY_BEHAVIOR_UNRESTRICTED: "无视限制",
		DOTA_ABILITY_BEHAVIOR_IGNORE_PSEUDO_QUEUE: "总有效-自动施法",
		DOTA_ABILITY_BEHAVIOR_IGNORE_CHANNEL: "施法打断有效",
		DOTA_ABILITY_BEHAVIOR_DONT_CANCEL_MOVEMENT: "不影响移动",
		DOTA_ABILITY_BEHAVIOR_DONT_ALERT_TARGET: "不惊醒目标",
		DOTA_ABILITY_BEHAVIOR_DONT_RESUME_ATTACK: "不恢复攻击",
		DOTA_ABILITY_BEHAVIOR_NORMAL_WHEN_STOLEN: "偷取保持前摇",
		DOTA_ABILITY_BEHAVIOR_IGNORE_BACKSWING: "无视后摇",
		DOTA_ABILITY_BEHAVIOR_RUNE_TARGET: "神符目标",
		DOTA_ABILITY_BEHAVIOR_DONT_CANCEL_CHANNEL: "不取消持续施法?",
		DOTA_ABILITY_BEHAVIOR_OPTIONAL_UNIT_TARGET: "可选单位目标?",
		DOTA_ABILITY_BEHAVIOR_OPTIONAL_NO_TARGET: "可选无目标?",

		DOTA_UNIT_TARGET_HERO: "英雄",
		DOTA_UNIT_TARGET_BASIC: "基本",
		DOTA_UNIT_TARGET_ALL: "所有",
		DOTA_UNIT_TARGET_BUILDING: "建筑",
		DOTA_UNIT_TARGET_COURIER: "信使",
		DOTA_UNIT_TARGET_CREEP: "野怪",
		DOTA_UNIT_TARGET_CUSTOM: "普通",
		DOTA_UNIT_TARGET_MECHANICAL: "机械",
		DOTA_UNIT_TARGET_NONE: "无",
		DOTA_UNIT_TARGET_OTHER: "其他",
		DOTA_UNIT_TARGET_TREE: "树木",

		DOTA_UNIT_TARGET_TEAM_BOTH: "双方队伍",
		DOTA_UNIT_TARGET_TEAM_ENEMY: "敌方队伍",
		DOTA_UNIT_TARGET_TEAM_FRIENDLY: "友方队伍",
		DOTA_UNIT_TARGET_TEAM_CUSTOM: "普通队伍",
		DOTA_UNIT_TARGET_TEAM_NONE: "无",

		DOTA_UNIT_TARGET_FLAG_CHECK_DISABLE_HELP: "检测玩家'禁用帮助'选项",
		DOTA_UNIT_TARGET_FLAG_DEAD: "已死亡",
		DOTA_UNIT_TARGET_FLAG_FOW_VISIBLE: "*暂无说明*",
		DOTA_UNIT_TARGET_FLAG_INVULNERABLE: "无敌",
		DOTA_UNIT_TARGET_FLAG_MAGIC_IMMUNE_ENEMIES: "魔法免疫的敌人",
		DOTA_UNIT_TARGET_FLAG_MANA_ONLY: "*暂无说明*",
		DOTA_UNIT_TARGET_FLAG_MELEE_ONLY: "*暂无说明*",
		DOTA_UNIT_TARGET_FLAG_NO_INVIS: "不是隐形的",
		DOTA_UNIT_TARGET_FLAG_NONE: "无",
		DOTA_UNIT_TARGET_FLAG_NOT_ANCIENTS: "不是远古",
		DOTA_UNIT_TARGET_FLAG_NOT_ATTACK_IMMUNE: "不是攻击免疫",
		DOTA_UNIT_TARGET_FLAG_NOT_CREEP_HERO: "不是野怪",
		DOTA_UNIT_TARGET_FLAG_NOT_DOMINATED: "不可控制的",
		DOTA_UNIT_TARGET_FLAG_NOT_ILLUSIONS: "不是幻象",
		DOTA_UNIT_TARGET_FLAG_NOT_MAGIC_IMMUNE_ALLIES: "不是魔法免疫的盟友",
		DOTA_UNIT_TARGET_FLAG_NOT_NIGHTMARED: "非被催眠的",
		DOTA_UNIT_TARGET_FLAG_NOT_SUMMONED: "非召唤的",
		DOTA_UNIT_TARGET_FLAG_OUT_OF_WORLD: "被放逐出世界的",
		DOTA_UNIT_TARGET_FLAG_PLAYER_CONTROLLED: "玩家控制的",
		DOTA_UNIT_TARGET_FLAG_RANGED_ONLY: "远程单位",
		DOTA_UNIT_TARGET_FLAG_PREFER_ENEMIES: "更倾向敌人",

		DAMAGE_TYPE_MAGICAL: "魔法伤害",
		DAMAGE_TYPE_PHYSICAL: "物理伤害",
		DAMAGE_TYPE_PURE: "纯粹伤害",

		DOTA_ABILITY_TYPE_BASIC: "普通技能",
		DOTA_ABILITY_TYPE_ULTIMATE: "终极技能",
		DOTA_ABILITY_TYPE_ATTRIBUTES: "用于属性奖励",
		DOTA_ABILITY_TYPE_HIDDEN: "干啥的?",

		ACT_DOTA_ATTACK: "攻击",
		ACT_DOTA_CAST_ABILITY_1: "施法",
		ACT_DOTA_CHANNEL_ABILITY_1: "持续施法",
		ACT_DOTA_DISABLED: "伤残",
		ACT_DOTA_RUN: "奔跑",
		ACT_DOTA_SPAWN: "出生",
		ACT_DOTA_TELEPORT: "传送",
		ACT_DOTA_VICTORY: "胜利",

		FIELD_INTEGER: "int",
		FIELD_FLOAT: "float",

		// 物品
		ID: "ID",
		ItemCost: "花费",
		ItemDroppable: "可丢弃",
		ItemSellable: "可出售",
		ItemShareability: "共享方式",

		ItemPurchasable: "可购买",
		ItemDeclarations: "购买提醒",
		ItemKillable: "可摧毁",
		ItemAlertable: "可提醒",
		ItemPermanent: "永久的",
		ItemInitialCharges: "初始数量",
		ItemRequiresCharges: "需要数量才能使用",
		ItemStackable: "可叠加",
		SideShop: "基地商店",
		SecretShop: "神秘商店",
		ItemCastOnPickup: "拾起使用",
		ItemQuality: "物品质量",
		ItemShopTags: "商店标签",
		ItemAliases: "物品别名",
		MaxUpgradeLevel: "物品最大等级",
		ItemBaseLevel: "物品基础等级",
		ItemRecipe: "合成卷轴",
		ItemResult: "合成结果",
		ItemRequirements: "合成需要",
		ItemDisassembleRule: "可拆分",

		// 修饰器
		Hidden: "隐藏的",
		NewModifier: "新建修饰器",
		_name: "名称",
		_comment: "备注",
		Attributes: "属性",
		Duration: "持续时间",
		Passive: "默认拥有",
		TextureName: "图标",
		IsBuff: "正面效果",
		IsDebuff: "负面效果",
		IsHidden: "隐藏图标",
		IsPurgable: "可净化",
		AllowIllusionDuplicate: "幻象可继承",
		_IsAura: "作为光环",
		Aura: "光环赋予的修饰器",
		Aura_Radius: "光环影响半径",
		Aura_Teams: "光环影响队伍",
		Aura_Types: "光环影响类型",
		Aura_Flags: "光环影响标记",
		Aura_ApplyToCaster: "光环影响拥有者",
		EffectName: "特效名",
		EffectAttachType: "特效绑定位置",
		StatusEffectName: "状态特效",
		StatusEffectPriority: "状态特效优先级",
		OverrideAnimation: "覆盖动画",
		ThinkInterval: "计时间隔",

		MODIFIER_ATTRIBUTE_NONE: "无",
		MODIFIER_ATTRIBUTE_MULTIPLE: "可重复",
		MODIFIER_ATTRIBUTE_PERMANENT: "死亡保持",
		MODIFIER_ATTRIBUTE_IGNORE_INVULNERABLE: "无敌保持",

		Properties: "属性",
		States: "状态",
		Events: "事件",
		Operation: "操作",

		"Event Type": "事件类型",

		// 修饰器 - 法球
		DOTA_ORB_PRIORITY_ABILITY: "技能优先级",
		DOTA_ORB_PRIORITY_DEFAULT: "默认优先级",
		DOTA_ORB_PRIORITY_ITEM: "物品优先级",
		DOTA_ORB_PRIORITY_ITEM_PROC: "触发物品优先级",
		DOTA_ORB_PRIORITY_NONE: "无优先级",

		// 修饰器 - 属性
		NewProperty: "新建属性",
		MODIFIER_PROPERTY_ABSOLUTE_NO_DAMAGE_MAGICAL: "魔法攻击无效",
		MODIFIER_PROPERTY_ABSOLUTE_NO_DAMAGE_PHYSICAL: "物理攻击无效",
		MODIFIER_PROPERTY_ABSOLUTE_NO_DAMAGE_PURE: "纯粹攻击无效",
		MODIFIER_PROPERTY_ABSORB_SPELL: "偷取法术？",
		MODIFIER_PROPERTY_ATTACK_RANGE_BONUS: "攻击范围奖励",
		MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT: "修改攻击速度",
		MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT_POWER_TREADS: "？",
		MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT_SECONDARY: "？",
		MODIFIER_PROPERTY_AVOID_CONSTANT: "虚空假面闪避？",
		MODIFIER_PROPERTY_AVOID_SPELL: "虚空假面法术闪避？",
		MODIFIER_PROPERTY_BASEATTACK_BONUSDAMAGE: "修改基础攻击力",
		MODIFIER_PROPERTY_BASE_ATTACK_TIME_CONSTANT: "修改基础攻击间隔",
		MODIFIER_PROPERTY_BASEDAMAGEOUTGOING_PERCENTAGE: "百分比修改基础伤害",
		MODIFIER_PROPERTY_BASE_MANA_REGEN: "修改基础魔法恢复数值",
		MODIFIER_PROPERTY_BONUS_DAY_VISION: "奖励白天视野",
		MODIFIER_PROPERTY_BONUS_NIGHT_VISION: "奖励黑夜视野",
		MODIFIER_PROPERTY_BONUS_VISION_PERCENTAGE: "奖励百分比视野",
		MODIFIER_PROPERTY_CHANGE_ABILITY_VALUE: "改变技能数值",
		MODIFIER_PROPERTY_COOLDOWN_REDUCTION_CONSTANT: "减少冷却时间",
		MODIFIER_PROPERTY_DAMAGEOUTGOING_PERCENTAGE: "百分比修改攻击力，负降正升",
		MODIFIER_PROPERTY_DAMAGEOUTGOING_PERCENTAGE_ILLUSION: "百分比修改幻象攻击力",
		MODIFIER_PROPERTY_DEATHGOLDCOST: "修改死亡损失的金钱",
		MODIFIER_PROPERTY_DISABLE_AUTOATTACK: "禁止自动攻击",
		MODIFIER_PROPERTY_DISABLE_HEALING: "禁止生命回复",
		MODIFIER_PROPERTY_DISABLE_TURNING: "禁止转身（无效）",
		MODIFIER_PROPERTY_EVASION_CONSTANT: "闪避",
		MODIFIER_PROPERTY_EXTRA_HEALTH_BONUS: "额外生命值（无效）",
		MODIFIER_PROPERTY_EXTRA_MANA_BONUS: "额外魔法值（无效）",
		MODIFIER_PROPERTY_EXTRA_STRENGTH_BONUS: "额外力量（无效）",
		MODIFIER_PROPERTY_FORCE_DRAW_MINIMAP: "?",
		MODIFIER_PROPERTY_HEALTH_BONUS: "生命值奖励",
		MODIFIER_PROPERTY_HEALTH_REGEN_CONSTANT: "固定的生命回复数值",
		MODIFIER_PROPERTY_HEALTH_REGEN_PERCENTAGE: "百分比生命回复数值",
		MODIFIER_PROPERTY_IGNORE_CAST_ANGLE: "?",
		MODIFIER_PROPERTY_INCOMING_DAMAGE_PERCENTAGE: "百分比修改受到所有伤害，负降正升",
		MODIFIER_PROPERTY_INCOMING_PHYSICAL_DAMAGE_PERCENTAGE: "百分比修改受到物理伤害，负降正升",
		MODIFIER_PROPERTY_INCOMING_SPELL_DAMAGE_CONSTANT: "百分比修改受到技能伤害，负降正升",
		MODIFIER_PROPERTY_INVISIBILITY_LEVEL: "隐身等级?",
		MODIFIER_PROPERTY_IS_ILLUSION: "是否为某个单位的幻象",
		MODIFIER_PROPERTY_IS_SCEPTER: "是否携带蓝杖？",
		MODIFIER_PROPERTY_LIFETIME_FRACTION: "?",
		MODIFIER_PROPERTY_MAGICAL_RESISTANCE_BONUS: "魔法抗性，对神圣伤害无效，可以累加",
		MODIFIER_PROPERTY_MAGICAL_RESISTANCE_DECREPIFY_UNIQUE: "骨法的衰老，影响魔法抗性，不可累加",
		MODIFIER_PROPERTY_MAGICAL_RESISTANCE_ITEM_UNIQUE: "魔法抗性，对神圣伤害无效，不可以累加",
		MODIFIER_PROPERTY_MANA_BONUS: "魔法值奖励",
		MODIFIER_PROPERTY_MANA_REGEN_CONSTANT: "修改基础魔法回复数值",
		MODIFIER_PROPERTY_MANA_REGEN_CONSTANT_UNIQUE: "修改基础魔法回复数值，不可叠加",
		MODIFIER_PROPERTY_MANA_REGEN_PERCENTAGE: "百分比基础魔法恢复",
		MODIFIER_PROPERTY_MANA_REGEN_TOTAL_PERCENTAGE: "百分比所有魔法恢复",
		MODIFIER_PROPERTY_MIN_HEALTH: "生命值不小于",
		MODIFIER_PROPERTY_MISS_PERCENTAGE: "MISS几率",
		MODIFIER_PROPERTY_MODEL_CHANGE: "设定模型",
		MODIFIER_PROPERTY_MODEL_SCALE: "模型大小（无效）",
		MODIFIER_PROPERTY_MOVESPEED_ABSOLUTE: "设置移动速度",
		MODIFIER_PROPERTY_MOVESPEED_BASE_OVERRIDE: "设置基础移动速度",
		MODIFIER_PROPERTY_MOVESPEED_BONUS_CONSTANT: "增加移动速度数值",
		MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE: "百分比增加移动速度，自身不叠加",
		MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE_UNIQUE: "独立百分比增加移动速度，不叠加",
		MODIFIER_PROPERTY_MOVESPEED_BONUS_UNIQUE: "增加移动速度数值，不叠加",
		MODIFIER_PROPERTY_MOVESPEED_LIMIT: "限制移动速度（无效）",
		MODIFIER_PROPERTY_MOVESPEED_MAX: "最大移动速度（无效）",
		MODIFIER_PROPERTY_OVERRIDE_ANIMATION: "强制播放模型动作",
		MODIFIER_PROPERTY_OVERRIDE_ANIMATION_RATE: "设置播放模型动作快慢",
		MODIFIER_PROPERTY_OVERRIDE_ANIMATION_WEIGHT: "强制播放模型动作_重？",
		MODIFIER_PROPERTY_OVERRIDE_ATTACK_MAGICAL: "魔法攻击",
		MODIFIER_PROPERTY_PERSISTENT_INVISIBILITY: "永久性隐身",
		MODIFIER_PROPERTY_PHYSICAL_ARMOR_BONUS: "增加护甲",
		MODIFIER_PROPERTY_PHYSICAL_ARMOR_BONUS_ILLUSIONS: "增加幻象的护甲",
		MODIFIER_PROPERTY_PHYSICAL_ARMOR_BONUS_UNIQUE: "增加护甲，不可叠加",
		MODIFIER_PROPERTY_PHYSICAL_ARMOR_BONUS_UNIQUE_ACTIVE: "改变圆盾减伤的效果？",
		MODIFIER_PROPERTY_PHYSICAL_CONSTANT_BLOCK: "数值减免伤害？",
		MODIFIER_PROPERTY_POST_ATTACK: "增加攻击力？",
		MODIFIER_PROPERTY_PREATTACK_BONUS_DAMAGE: "修改附加攻击力",
		MODIFIER_PROPERTY_PREATTACK_BONUS_DAMAGE_POST_CRIT: "以增加伤害的方式修改伤害值，不计入暴击计算",
		MODIFIER_PROPERTY_PREATTACK_CRITICALSTRIKE: "致命一击",
		MODIFIER_PROPERTY_PROCATTACK_BONUS_DAMAGE_COMPOSITE: "修改在普通攻击后计算的神圣伤害",
		MODIFIER_PROPERTY_PROCATTACK_BONUS_DAMAGE_MAGICAL: "修改在普通攻击后计算的魔法伤害",
		MODIFIER_PROPERTY_PROCATTACK_BONUS_DAMAGE_PHYSICAL: "修改在普通攻击后计算的物理伤害",
		MODIFIER_PROPERTY_PROCATTACK_BONUS_DAMAGE_PURE: "修改在普通攻击后计算的纯粹伤害",
		MODIFIER_PROPERTY_PROCATTACK_FEEDBACK: "法力燃烧？",
		MODIFIER_PROPERTY_PROVIDES_FOW_POSITION: "?",
		MODIFIER_PROPERTY_REINCARNATION: "不朽之守护或者是骷髅王的大招？",
		MODIFIER_PROPERTY_RESPAWNTIME: "修改重生时间",
		MODIFIER_PROPERTY_RESPAWNTIME_PERCENTAGE: "百分比修改重生时间",
		MODIFIER_PROPERTY_RESPAWNTIME_STACKING: "累积重生时间",
		MODIFIER_PROPERTY_STATS_AGILITY_BONUS: "修改敏捷",
		MODIFIER_PROPERTY_STATS_INTELLECT_BONUS: "修改智力",
		MODIFIER_PROPERTY_STATS_STRENGTH_BONUS: "修改力量",
		MODIFIER_PROPERTY_TOOLTIP: "可被用于任何提示， 比如臂章的血量移除",
		MODIFIER_PROPERTY_TOTAL_CONSTANT_BLOCK: "减免所有来源的伤害",
		MODIFIER_PROPERTY_TOTAL_CONSTANT_BLOCK_UNAVOIDABLE_PRE_ARMOR: "对于自动攻击的伤害减免",
		MODIFIER_PROPERTY_TOTALDAMAGEOUTGOING_PERCENTAGE: "（无效）",
		MODIFIER_PROPERTY_TRANSLATE_ACTIVITY_MODIFIERS: "动作修改？",
		MODIFIER_PROPERTY_TRANSLATE_ATTACK_SOUND: "攻击音效修改？",
		MODIFIER_PROPERTY_TURN_RATE_PERCENTAGE: "百分比修改转向速度",
		MODIFIER_PROPERTY_MAGICDAMAGEOUTGOING_PERCENTAGE: "魔法输出百分比",
		MODIFIER_PROPERTY_INCOMING_PHYSICAL_DAMAGE_CONSTANT: "所受物理伤害数值",
		MODIFIER_PROPERTY_NEGATIVE_EVASION_CONSTANT: "降低闪避概率",
		MODIFIER_PROPERTY_CAST_RANGE_BONUS: "施法距离增益",
		MODIFIER_PROPERTY_ATTACK_RANGE_BONUS_UNIQUE: "攻击距离增益，不叠加",
		MODIFIER_PROPERTY_MAX_ATTACK_RANGE: "最大攻击距离增益",
		MODIFIER_PROPERTY_COOLDOWN_PERCENTAGE_STACKING: "冷却时间堆叠",
		MODIFIER_PROPERTY_SUPER_ILLUSION_WITH_ULTIMATE: "终极幻象-VS大招",

		// 修饰器 - 状态
		NewStates: "新建状态",
		MODIFIER_STATE_ATTACK_IMMUNE:"攻击免疫",
		MODIFIER_STATE_BLIND:"致盲？",
		MODIFIER_STATE_BLOCK_DISABLED:"禁用伤害减免？",
		MODIFIER_STATE_CANNOT_MISS:"无法闪避？",
		MODIFIER_STATE_COMMAND_RESTRICTED:"不能执行命令",
		MODIFIER_STATE_DISARMED:"缴械",
		MODIFIER_STATE_DOMINATED:"支配？",
		MODIFIER_STATE_EVADE_DISABLED:"无法躲避？",
		MODIFIER_STATE_FLYING:"飞行",
		MODIFIER_STATE_FROZEN:"冰冻",
		MODIFIER_STATE_HEXED:"妖术",
		MODIFIER_STATE_INVISIBLE:"隐身",
		MODIFIER_STATE_INVULNERABLE:"无敌",
		MODIFIER_STATE_LOW_ATTACK_PRIORITY:"低攻击优先级",
		MODIFIER_STATE_MAGIC_IMMUNE:"魔免",
		MODIFIER_STATE_MUTED:"禁用物品",
		MODIFIER_STATE_NIGHTMARED:"催眠",
		MODIFIER_STATE_NO_HEALTH_BAR:"无生命条",
		MODIFIER_STATE_NO_TEAM_MOVE_TO:"没有移动到队伍",
		MODIFIER_STATE_NO_TEAM_SELECT:"没有选择队伍",
		MODIFIER_STATE_NOT_ON_MINIMAP:"无小地图",
		MODIFIER_STATE_NOT_ON_MINIMAP_FOR_ENEMIES:"对敌方无小地图",
		MODIFIER_STATE_NO_UNIT_COLLISION:"无碰撞",
		MODIFIER_STATE_OUT_OF_GAME:"离开游戏",
		MODIFIER_STATE_PASSIVES_DISABLED:"禁用被动",
		MODIFIER_STATE_PROVIDES_VISION:"提供视野",
		MODIFIER_STATE_ROOTED:"被缠绕",
		MODIFIER_STATE_SILENCED:"沉默",
		MODIFIER_STATE_SOFT_DISARMED:"解除武器",
		MODIFIER_STATE_SPECIALLY_DENIABLE:"？",
		MODIFIER_STATE_STUNNED:"眩晕",
		MODIFIER_STATE_UNSELECTABLE:"不可选",

		MODIFIER_STATE_VALUE_ENABLED: "启用",
		MODIFIER_STATE_VALUE_DISABLED: "禁用",

		// 单位
		Ability1: "技能1",
		Ability2: "技能2",
		Ability3: "技能3",
		Ability4: "技能4",
		Ability5: "技能5",
		Ability6: "技能6",
		Ability7: "技能7",
		Ability8: "技能8",
		Ability9: "技能9",
		Ability10: "技能10",
		Ability11: "技能11",
		Ability12: "技能12",
		Ability13: "技能13",
		Ability14: "技能14",
		Ability15: "技能15",
		Ability16: "技能16",
		AbilityLayout: "技能布局",
		ArmorGain: "护甲获得",
		ArmorPhysical: "物理护甲",
		AutoAttacksByDefault: "自动攻击",
		AttachWearables: "穿戴物",
		AttackAcquisitionRange: "攻击接受范围(警戒范围)",
		AttackAnimationPoint: "攻击动画点",
		AttackCapabilities: "攻击能力",
		AttackDamageMax: "攻击最大值",
		AttackDamageMin: "攻击最小值",
		AttackDamageType: "攻击伤害类型【无效】",
		AttackRange: "攻击范围",
		AttackRangeBuffer: "攻击缓冲范围",
		AttackRate: "攻击速率",
		BoundsHullName: "碰撞体积",
		BountyGain: "奖励获得",
		BountyXP: "经验奖励",
		BountyGoldMax: "金钱奖励最大值",
		BountyGoldMin: "金钱奖励最小值",
		CanRespawn: "可复活？",
		CanBeDominated: "可被支配",
		CombatClassAttack: "攻击类型",
		CombatClassDefend: "防御类型",
		ConsideredHero: "作为英雄",
		DamageGain: "伤害获得",
		DisableClumpingBehavior: "聚集行为",
		DisableResistance: "控制抗性",
		HasInventory: "有物品栏",
		HealthBarOffset: "生命条偏移",
		HPGain: "生命获得",
		IsAncient: "远古单位",
		IsNeutralUnitType: "中立单位",
		Level: "等级",
		MagicalResistance: "魔法抗性",
		MagicResistGain: "魔抗获得",
		MinimapIcon: "小地图图标",
		MinimapIconSize: "小地图图标尺寸",
		Model: "模型",
		ModelScale: "模型比例",
		MovementCapabilities: "移动能力",
		MovementSpeed: "移动速度",
		MovementTurnRate: "转身速率",
		MoveSpeedGain: "移动速度获得",
		RingRadius: "选取框半径",
		ShouldDoFlyHeightVisual: "空中高度？",
		StatusHealth: "基础生命值",
		StatusHealthRegen: "基础生命恢复",
		StatusMana: "基础魔法值",
		StatusManaRegen: "基础魔法恢复",
		StatusStartingMana: "初始魔法值",
		TeamName: "队伍名称",
		UnitLabel: "单位标签",
		UnitRelationShipClass: "单位相关类型",
		VisionDaytimeRange: "白天视野",
		VisionNighttimeRange: "晚上视野",
		WakesNeutrals: "唤醒单位",
		XPGain: "经验获得",
		SoundSet: "声音集",
		GameSoundsFile: "游戏声音文件",
		IdleSoundLoop: "闲置声音",
		SelectionGroup: "选择组",
		SelectOnSpawn: "出生时选取",
		IgnoreAddSummonedToSelection: "忽略选择召唤单位",
		ProjectileModel: "投射物模型",
		ProjectileSpeed: "投射物速度",
		HasAggressiveStance: "拥有侵略姿势",
		FollowRange: "跟随距离",
		vscripts: "脚本文件",
		UseNeutralCreepBehavior: "使用野怪行为",
		Skin: "皮肤",

		NoWearable: "没有饰品",
		NoUnassigned: "没有未分配值",

		// 单位 - 描述
		DOTA_UNIT_CAP_NO_ATTACK: "不能攻击",
		DOTA_UNIT_CAP_MELEE_ATTACK: "近战攻击",
		DOTA_UNIT_CAP_RANGED_ATTACK: "远程攻击",

		DOTA_ATTRIBUTE_AGILITY: "敏捷",
		DOTA_ATTRIBUTE_INTELLECT: "智力",
		DOTA_ATTRIBUTE_STRENGTH: "力量",

		DOTA_UNIT_CAP_MOVE_NONE: "不能移动",
		DOTA_UNIT_CAP_MOVE_GROUND: "地面",
		DOTA_UNIT_CAP_MOVE_FLY: "飞行",

		DOTA_COMBAT_CLASS_ATTACK_BASIC: "普通",
		DOTA_COMBAT_CLASS_ATTACK_HERO: "英雄",
		DOTA_COMBAT_CLASS_ATTACK_LIGHT: "混乱",
		DOTA_COMBAT_CLASS_ATTACK_PIERCE: "穿刺",
		DOTA_COMBAT_CLASS_ATTACK_SIEGE: "攻城",

		DOTA_COMBAT_CLASS_DEFEND_BASIC: "普通",
		DOTA_COMBAT_CLASS_DEFEND_HERO: "英雄",
		DOTA_COMBAT_CLASS_DEFEND_SOFT: "轻型",
		DOTA_COMBAT_CLASS_DEFEND_STRONG: "重型",
		DOTA_COMBAT_CLASS_DEFEND_STRUCTURE: "建筑",
		DOTA_COMBAT_CLASS_DEFEND_WEAK: "脆弱",

		DOTA_NPC_UNIT_RELATIONSHIP_TYPE_DEFAULT: "默认",
		DOTA_NPC_UNIT_RELATIONSHIP_TYPE_BARRACKS: "兵营",
		DOTA_NPC_UNIT_RELATIONSHIP_TYPE_BUILDING: "建筑",
		DOTA_NPC_UNIT_RELATIONSHIP_TYPE_COURIER: "信使",
		DOTA_NPC_UNIT_RELATIONSHIP_TYPE_HERO: "英雄",
		DOTA_NPC_UNIT_RELATIONSHIP_TYPE_SIEGE: "主城",
		DOTA_NPC_UNIT_RELATIONSHIP_TYPE_WARD: "眼",

		// 检测
		CheckReport: "检测报告",
		Filter: "过滤",

		// 图标选择器
		TexturePicker: "图标选择器",
		Pick: "选取",

		// 事件
		NewEvent: "新建事件",
		NoEvent: "没有事件",
		EventType: "事件类型",
		OnSpellStart: "开始施法",
		OnAbilityStart: "技能开始",
		OnAbilityExecuted: "释放技能",
		OnAbilityEndChannel: "停止施法",
		OnAbilityPhaseStart: "开始阶段（转身之前）",
		OnAttack: "攻击",
		OnAttacked: "被攻击",
		OnAttackAllied: "攻击队友",
		OnAttackFailed: "攻击失败",
		OnChannelFinish: "持续施法结束",
		OnChannelInterrupted: "持续施法中断",
		OnChannelSucceeded: "持续施法成功",
		OnEquip: "装备物品",
		OnUnequip: "取下物品",
		OnHealReceived: "受到治疗",
		OnHealthGained: "获得生命值",
		OnHeroKilled: "被英雄杀死",
		OnKill: "杀死单位",
		OnManaGained: "获得魔法值",
		OnOrder: "执行指令",
		OnOwnerDied: "拥有者死亡",
		OnOwnerSpawned: "拥有者出生",
		OnProjectileDodge: "投射物闪避",
		OnProjectileFinish: "投射物结束",
		OnProjectileHitUnit: "投射物命中",
		OnRespawn: "重生",
		OnSpentMana: "消耗魔法",
		OnStateChanged: "状态改变",
		OnTeleported: "传送完成",
		OnTeleporting: "传送中",
		OnToggleOff: "开关：关",
		OnToggleOn: "开关：开",
		OnUnitMoved: "移动",
		OnUpgrade: "技能升级",
		OnCreated: "Modifier创建",
		OnDestroy: "Modifier移除",
		OnIntervalThink: "定时器",
		OnAttackLanded: "攻击命中",
		OnAttackStart: "开始攻击",
		OnDealDamage: "施加伤害",
		OnDeath: "死亡",
		OnOrbFire: "法球被释放",
		OnOrbImpact: "法球命中",
		OnTakeDamage: "受到伤害",
		OnSpellTargetReady: "当技能选定目标",
		_Orb: "法球",
		Orb: "法球",
		"Priority": "优先级",
		"ProjectileName": "投射物",
		"CastAttack": "施法攻击",

		// 操作
		DeleteOnHit: "命中时删除",
		NewOperation: "新建操作",
		ApplyModifier: "添加修饰器",
		RemoveModifier: "移除修饰器",
		AttachEffect: "添加特效",
		FireEffect: "触发特效",
		Damage: "伤害",
		Heal: "治疗",
		FireSound: "触发声音",
		RunScript: "执行脚本",
		Stun: "击晕",
		TrackingProjectile: "跟踪投射物",
		SpendMana: "消耗魔法",
		CreateBonusAttack: "额外攻击",
		Random: "随机",
		SpawnUnit: "召唤单位",
		ActOnTargets: "让目标行动",
		LevelUpAbility: "技能升级",
		Knockback: "击退",
		AddAbility: "添加技能",
		RemoveAbility: "删除技能",
		Blink: "闪烁",
		DestroyTrees: "摧毁树木",
		DelayedAction: "延迟动作",
		Lifesteal: "生命偷取",
		CleaveAttack: "分裂攻击",
		CreateThinker: "创建计时器",
		LinearProjectile: "线性投射物",
		SpendCharge: "消耗物品",
		ApplyMotionController: "运动控制",

		CASTER: "施法者",
		TARGET: "目标",
		POINT: "点",
		ATTACKER: "攻击者",
		UNIT: "单位",
		PROJECTILE: "投射物",

		attach_hitloc: "附着受伤点",
		attach_origin: "附着目标",
		attach_attack: "附着攻击",
		attach_attack1: "附着攻击1",
		attach_attack2: "附着攻击2",
		follow_origin: "跟随目标",
		follow_hitloc: "跟随受伤点",
		follow_overhead: "跟随头顶",
		follow_chest: "跟随胸部",
		follow_head: "跟随头部",
		follow_customorigin: "跟随自定义目标",
		follow_attachment: "跟随附件",
		follow_eyes: "跟随双眼",
		follow_attachment_substepped: "跟随附件分步",
		follow_renderorigin: "跟随渲染目标",
		follow_rootbone: "跟随根骨",
		world_origin: "世界中心",
		start_at_customorigin: "开始于自定义目标",
		start_at_origin: "开始于目标",
		start_at_attachment: "开始于附件",

		// 英雄
		override_hero: "替换英雄",

		AttributePrimary: "主属性",
		AttributeBaseStrength: "基础力量",
		AttributeStrengthGain: "升级力量获得",
		AttributeBaseAgility: "基础敏捷",
		AttributeAgilityGain: "升级敏捷获得",
		AttributeBaseIntelligence: "基础智力",
		AttributeIntelligenceGain: "升级智力获得",

		// 语言
		ShowAll: "显示全部",
		ShowEmpty: "显示空值",
		Search: "搜索",

		// 菜单
		EditorAlias: "编辑器别名",
		UsageMarker: "功能标记",
		Dummy: "马甲",
		Test: "测试",
		NoMark: "无标记",
		ColorMarker: "颜色标记",
		Duplicate: "复制",
		Delete: "删除",
		Green: "绿色",
		Blue: "蓝色",
		Red: "红色",
		Yellow: "黄色",
		Black: "黑色",
		None: "无",
		NothingNeedFix: "没有需要修改的建议",

		// 配置
		SyncAll: "同步全部",

		// 帮助
		projectFolder: "项目路径，例如：C:\\Steam\\steamapps\\common\\dota 2 beta\\game\\dota_addons\\sampleGame",
		title: "矩阵编辑器（β测试版）",
		description: "欢迎使用矩阵编辑器，这是由AMHC论坛提供的可视化Dota2 KV文件编辑器。支持单位、英雄、技能、物品以及多语言编辑功能。由于目前处于β测试版本，请使用时备份您的数据。",
		feedback: "如果您发现了问题，欢迎通过以下方式进行反馈，我们会进行修正：",
		bbs: "论坛：AMHC BBS Url: http://www.dota2rpg.com/forum.php?mod=forumdisplay&fid=134",
		qqGroup: "QQ群：346172518",
		mainLanguage: "主语言设置会帮助你在编辑界面自动显示主语言对应的名称描述。",
		connectionError: "网络连接错误，请重试",
		steamKeyDesc: "用于访问Steam API获取Dota2数据，未填写只会影响少部分功能。",
		applySteamKey: "如果您还没有Steam API Key，可以通过该地址申请（中国部分地区需要通过VPN访问）：",
		streamKeyNotSet: "未设置Stream API Key，您可能会遇到数据无法显示。于配置页设置/申请Stream API Key。",
		saveKeepKV: '保存时保持所有的KV。如果不勾选，会忽略未赋值的键。例如"HasInventory" ""，会被忽略。',
		kvCaseSensitive: "KV大小写敏感。如果您无法保证KV文件的大小写符合标准，请不要勾选此选项",
		illegalCharacter: '输入不合法',
		duplicateDefined: '字段被重复定义',
		emptyList: "列表为空",
		unitCheckFail: "无效单位。普通单位必须保证至少拥有基类、模型和生命值属性，英雄单位必须保证拥有替换英雄属性",
		conflictName: "名称冲突",
		conflictNameConfirm: "名称冲突，确定复用吗？",
		noLanguageFile: "没有找到语言文件",
		exitConfirm: "您确认要退出吗？",
		eventUseText: "技能与物品的事件选项框改成带提示的文本，如果你对事件列表十分熟悉。推荐使用该模式。",
		operationUseText: "技能与物品的操作选项框改成带提示的文本，如果你对操作列表十分熟悉。推荐使用该模式。",
		originNoPrecache: "在KV中引用到的特效保存时将被自动添加，不需要手动添加precache。",
		itemAutoID: "物品自动分配ID",
		itemAutoIDTip: "会自动寻找1500~5000中未使用过的ID作为物品ID",
		forkModifierNewName: "如果你不想使复制的技能修饰器绑定同一份语言描述，请修改修饰器名称",
		loopCheckFolder: "保持检查项目所在文件夹，用于Function的自动补全。关闭后不会持续检查目录变化。",
		reportLimit: "检测报告在检测到100个问题后会停止继续检测，以避免过多性能消耗",
		virtualView: "这是虚拟视图，并不会影响真实的文件顺序",
		folderNotEmpty: "文件夹不为空",
		saveSuccess: "保存成功！",
		languageParseError: "检测到无法解析的语言文件：${file}，保存时将被覆盖。如果你不想被覆盖，请检查该文件格式。",
		saveBackUp: "每次保存，自动对原先文件进行备份。最多保留最近10次更改。",
		syncAll: "如果你想使用直观的图标选择预览功能，请使用此功能来下载所有图标文件。除非你点击此功能，否则编辑器不会主动下载最新的资源。（使用时请确保网络通顺）",
		texturePickerEmpty: "图标列表为空，请先进入配置界面点击“同步全部”下载最新的图标列表。",
		texturePickerCustomizeEmpty: "自定义图标列表为空。",
		updating: "正在更新。如果在更新过程中关闭程序，可下次打开重新更新。",
		updateFinish: "更新完成，重启以应用更新。",
		updateFailed: "更新失败，请检查你的网络。",
		typeaheadFuncPrefix: "去掉勾选会使得RunScript自动提示不携带scripts/vscripts/前缀"
	};

	return Locale;
});