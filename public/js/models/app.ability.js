﻿'use strict';

// ======================================================
// =                        技能                        =
// ======================================================
app.factory("Ability", function($q, Event, Modifier) {
	function _fillAttr(isItem, ability, attr, defaultValue) {
		if(defaultValue === undefined) {
			ability[attr] = {};
			$.each(Ability[attr], function(i, item) {
				ability[attr][item[0]] = false;
			});
		} else {
			ability[attr] = defaultValue;
		}

		// 属性描述设置，中文描述，显示标题，类型
		return function(desc, title, type) {
			var _unit = {
				attr: attr,
				title: title,
				desc: desc,
				type: type,
			};
			(isItem ? ability._requireItemList : ability._requireList).push(_unit);
		};
	}

	function fillAttr(ability, attr, defaultValue) {
		return _fillAttr(false, ability, attr, defaultValue);
	}

	function fillItemAttr(ability, attr, defaultValue) {
		return _fillAttr(true, ability, attr, defaultValue);
	}

	var Ability = function(isItem) {
		var _my = this;
		_my._requireItemList = [];
		_my._requireList = [];
		_my._isItem = isItem;

		// ========================================
		// =                 属性                 =
		// ========================================
		// 名字
		_my._name = "undefined";

		// 备注
		_my._comment = "";

		// 基类
		fillAttr(_my, "BaseClass", "ability_datadriven")("基类");

		// 图标
		fillAttr(_my, "AbilityTextureName", "")("图标");

		// 物品代码
		if(isItem) {
			fillItemAttr(_my, "ID", "")("ID");
			fillItemAttr(_my, "ItemCost", "0")("花费");
			fillItemAttr(_my, "ItemDroppable", true)("可丢弃");
			fillItemAttr(_my, "ItemSellable", true)("可出售");
			fillItemAttr(_my, "ItemShareability", "-")("共享方式");

			fillItemAttr(_my, "ItemPurchasable", "-")("可购买");
			fillItemAttr(_my, "ItemDeclarations", "")("购买提醒");
			fillItemAttr(_my, "ItemKillable", true)("可摧毁");
			fillItemAttr(_my, "ItemAlertable", false)("可提醒");
			fillItemAttr(_my, "ItemPermanent", "-")("永久的");
			fillItemAttr(_my, "ItemInitialCharges", "")("初始数量");
			fillItemAttr(_my, "ItemRequiresCharges", "-")("需要数量才能使用");
			fillItemAttr(_my, "ItemStackable", false)("可叠加");
			fillItemAttr(_my, "SideShop", "-")("基地商店");
			fillItemAttr(_my, "SecretShop", "-")("神秘商店");
			fillItemAttr(_my, "ItemCastOnPickup", false)("拾起使用");
			fillItemAttr(_my, "ItemQuality", "")("物品质量");
			fillItemAttr(_my, "ItemShopTags", "")("商店标签");
			fillItemAttr(_my, "ItemAliases", "")("物品别名");
			fillItemAttr(_my, "MaxUpgradeLevel", "")("物品最大等级");
			fillItemAttr(_my, "ItemBaseLevel", "")("物品基础等级");
			fillItemAttr(_my, "ItemRecipe", false)("合成菜单");
			fillItemAttr(_my, "ItemResult", "")("合成结果");
			fillItemAttr(_my, "ItemRequirements", "")("合成需要", null, "blob");  // TODO: 合成公式！
			fillItemAttr(_my, "ItemDisassembleRule", "-")("可拆分");
		}

		// 行为
		fillAttr(_my, "ScriptFile", "")("仅供ability_lua使用", "ScriptFile(ability_lua only)");

		// 行为
		fillAttr(_my, "AbilityBehavior")("行为");

		// 目标类型
		fillAttr(_my, "AbilityUnitTargetType")("目标类型");

		// 目标队伍
		fillAttr(_my, "AbilityUnitTargetTeam", "DOTA_UNIT_TARGET_TEAM_NONE")("目标队伍");

		// 目标标记
		fillAttr(_my, "AbilityUnitTargetFlags")("目标标记");

		// 伤害类型
		fillAttr(_my, "AbilityUnitDamageType","-")("伤害类型");

		// 技能类型
		fillAttr(_my, "AbilityType", "DOTA_ABILITY_TYPE_BASIC")("技能类型");

		// 热键
		fillAttr(_my, "HotKeyOverride","")("热键");

		// 最大等级
		fillAttr(_my, "MaxLevel","4")("最大等级");

		// 需要等级
		fillAttr(_my, "RequiredLevel","1")("需求等级");

		// 升级等级间隔
		fillAttr(_my, "LevelsBetweenUpgrades","2")("升级间隔");

		// 施法前摇
		fillAttr(_my, "AbilityCastPoint","0")("施法前摇");

		// 施法动作
		fillAttr(_my, "AbilityCastAnimation","")("施法动作", null, "text");

		// 冷却时间
		fillAttr(_my, "AbilityCooldown","0")("冷却时间");

		// 魔法消耗
		fillAttr(_my, "AbilityManaCost","0")("魔法消耗");

		// 施法距离
		fillAttr(_my, "AbilityCastRange","0")("施法距离");

		// 施法距离缓冲
		fillAttr(_my, "AbilityCastRangeBuffer","0")("施法距离缓冲");

		// 持续施法时间
		fillAttr(_my, "AbilityChannelTime","0")("持续施法时间");

		// 持续施法每秒耗魔
		fillAttr(_my, "AbilityChannelledManaCostPerSecond","0")("持续施法每秒耗魔");

		// AOE范围
		fillAttr(_my, "AOERadius","0")("AOE范围");

		// ========================================
		// =                 事件                 =
		// ========================================
		_my._eventList = [];

		// ========================================
		// =                修饰器                =
		// ========================================
		_my._modifierList = [];

		// ========================================
		// =                自定义                =
		// ========================================
		_my._abilitySpecialList = [];

		// ========================================
		// =                 语言                 =
		// ========================================
		_my._languages = {};

		return this;
	};

	// ================================================
	// =                     特效                     =
	// ================================================
	Ability.prototype.getPrecacheList = function() {
		var _list = [];

		// Particle File
		// Sound File
		// TODO: model File

		$.each(this._eventList, function(i, event) {
			_list = _list.concat(event.getPrecacheList());
		});

		$.each(this._modifierList, function(i, modifier) {
			_list = _list.concat(modifier.getPrecacheList());
		});

		return _list;
	};

	// ================================================
	// =                     语言                     =
	// ================================================
	Ability.prototype.getLang = function(language) {
		if(!language) return null;

		var _lang = this._languages[language.name];
		if(!_lang) {
			_lang = language.getAbilityLang(this);
			this._languages[language.name] = _lang;
		}
		return _lang;
	};

	// ================================================
	// =                     解析                     =
	// ================================================
	Ability.parse = function(kvUnit, isItem, lvl) {
		lvl = lvl || 0;
		_LOG("KV", lvl, "└ 技能：",kvUnit.value.title, kvUnit);

		var _ability = new Ability(isItem);
		_ability._name = kvUnit.value.title;
		_ability._comment = kvUnit.value.comment;

		$.each(kvUnit.value.kvList, function(i, unit) {
			var _attr = common.array.find(unit.key, _ability._requireList, "attr", false, false) || common.array.find(unit.key, _ability._requireItemList, "attr", false, false);

			// 匹配 _requireList
			if(_attr) {
				unit.key = _attr.attr;

				switch (typeof _ability[unit.key]) {
					case "string":
						_ability[unit.key] = unit.value;
						break;
					case "boolean":
						_ability[unit.key] = unit.value === "1";
						break;
					case "object":
						$.each(unit.value.split("|"), function (i, _value) {
							_value = _value.trim();
							if (_value in _ability[unit.key]) {
								_ability[unit.key][_value] = true;
							} else {
								_WARN("KV", lvl + 1, "Ability value not match:", unit.key, _value);
							}
						});
						break;
					default :
						_WARN("KV", lvl + 1, "Unmatched Ability type:", unit.key, _ability[unit.key]);
				}
			}

			// 匹配 Event
			else if(common.array.find(unit.key, Event.EventList, "0")) {
				_ability._eventList.push(Event.parse(unit, lvl + 1));
			}

			// 匹配 Modifiers
			else if(unit.key === "Modifiers") {
				_LOG("KV", lvl + 1, "└ 修饰器列表", unit.value);
				$.each(unit.value.kvList, function(i, _modifier) {
					_ability._modifierList.push(Modifier.parse(_modifier, lvl + 2));
				});
			}

			// 匹配 Modifiers
			else if(unit.key === "AbilitySpecial") {
				_LOG("KV", lvl + 1, "└ 自定义值列表", unit.value);
				_ability._abilitySpecialList = $.map(unit.value.kvList, function(asUnit) {
					return [[asUnit.value.kvList[1].key, asUnit.value.kvList[0].value, asUnit.value.kvList[1].value]];
				});
			}

			// 匹配 precache
			else if(unit.key === "precache") {
				// 不作为
			}

			// 不匹配
			else {
				_WARN("KV", lvl + 1, "Unmatched Ability key:", unit.key, unit.value);
			}
		});
		return _ability;
	};

	// ================================================
	// =                    格式化                    =
	// ================================================
	Ability.prototype.doWriter = function(writer) {
		writer.writeComment(this._comment);

		// 名称
		writer.write('"$1"', this._name);
		writer.write('{');

		// 物品属性
		if (this._requireItemList.length) {
			writer.writeComment('Item');
			writer.withKVList(this, this._requireItemList);
		}

		// 常规属性
		writer.writeComment('Common');
		writer.withKVList(this, this._requireList);

		// 预载入特效
		var _precacheList = this.getPrecacheList();
		if(_precacheList.length) {
			writer.write('');
			writer.write('"precache"');
			writer.write('{');
			$.each(_precacheList, function (i, _effectUnit) {
				writer.write('"$1"		"$2"', _effectUnit[0], _effectUnit[1]);
			});
			writer.write('}');
		}

		// 事件
		if(this._eventList.length) {
			writer.write('');

			$.each(this._eventList, function (i, event) {
				if(i !== 0) writer.write('');

				event.doWriter(writer);
			});
		}

		// 修饰器
		if(this._modifierList.length) {
			writer.write('');
			writer.write('"Modifiers"');
			writer.write('{');

			$.each(this._modifierList, function (i, modifier) {
				if(i !== 0) writer.write('');

				modifier.doWriter(writer);
			});

			writer.write('}');
		}

		// 自定义值
		if(this._abilitySpecialList.length) {
			writer.write('');
			writer.write('"AbilitySpecial"');
			writer.write('{');

			$.each(this._abilitySpecialList, function (i, _specialUnit) {
				writer.write('"$1"', common.text.preFill(i+1, "0", 2));
				writer.write('{');
				writer.write('"var_type"		"$1"', _specialUnit[1]);
				writer.write('"$1"		"$2"', _specialUnit[0], _specialUnit[2]);
				writer.write('}');
			});

			writer.write('}');
		}

		writer.write('}');
		return writer;
	};

	// ================================================
	// =                     常量                     =
	// ================================================
	Ability.filePath = "scripts/npc/npc_abilities_custom.txt";
	Ability.exportFilePath = "scripts/npc/npc_abilities_custom.txt";

	Ability.itemFilePath = "scripts/npc/npc_items_custom.txt";
	Ability.exportItemFilePath = "scripts/npc/npc_items_custom.txt";

	Ability.abilityConfig = ".dota2editor/ability.conf";
	Ability.itemConfig = ".dota2editor/item.conf";

	// ================================================
	// =                     属性                     =
	// ================================================
	Ability.ItemShareability = [
		["ITEM_FULLY_SHAREABLE","都可以共享"],
		["ITEM_FULLY_SHAREABLE_STACKING","库存共享"],
		["ITEM_NOT_SHAREABLE","不可共享"],
		["ITEM_PARTIALLY_SHAREABLE","部分共享"],
	];

	Ability.ItemDeclarations = [
		["DECLARE_PURCHASES_IN_SPEECH","语音"],
		["DECLARE_PURCHASES_TO_SPECTATORS","观众"],
		["DECLARE_PURCHASES_TO_TEAMMATES","播音员"],
	];

	Ability.ItemQuality = [
		["component","组件"],
		["rare","稀有(蓝)"],
		["epic","史诗(紫)"],
		["common","常见(绿)"],
		["consumable","消耗品(白)"],
		["secret_shop","神秘商店(青蓝)"],
		["artifact","神器(橙)"],
	];

	Ability.ItemDisassembleRule = [
		["-","无"],
		["DOTA_ITEM_DISASSEMBLE_ALWAYS","可拆分"],
		["DOTA_ITEM_DISASSEMBLE_NEVER","不可拆分"],
	];

	Ability.AbilityBehavior = [
		["DOTA_ABILITY_BEHAVIOR_IMMEDIATE","立即",true],
		["DOTA_ABILITY_BEHAVIOR_HIDDEN","隐藏", true],
		["DOTA_ABILITY_BEHAVIOR_PASSIVE","被动", true],
		["DOTA_ABILITY_BEHAVIOR_NO_TARGET","无目标", true],
		["DOTA_ABILITY_BEHAVIOR_UNIT_TARGET","目标", true],
		["DOTA_ABILITY_BEHAVIOR_POINT","点", true],
		["DOTA_ABILITY_BEHAVIOR_AOE","AOE", true],
		["DOTA_ABILITY_BEHAVIOR_CHANNELLED","持续施法", true],
		["DOTA_ABILITY_BEHAVIOR_NOT_LEARNABLE","不可学习"],
		["DOTA_ABILITY_BEHAVIOR_ITEM","物品？"],
		["DOTA_ABILITY_BEHAVIOR_TOGGLE","开关"],
		["DOTA_ABILITY_BEHAVIOR_DIRECTIONAL","方向"],
		["DOTA_ABILITY_BEHAVIOR_AUTOCAST","自动施法"],
		["DOTA_ABILITY_BEHAVIOR_NOASSIST","无辅助网格"],
		["DOTA_ABILITY_BEHAVIOR_AURA","光环（无用）"],
		["DOTA_ABILITY_BEHAVIOR_ATTACK","法球"],
		["DOTA_ABILITY_BEHAVIOR_DONT_RESUME_MOVEMENT","不恢复移动"],
		["DOTA_ABILITY_BEHAVIOR_ROOT_DISABLES","定身无法释放"],
		["DOTA_ABILITY_BEHAVIOR_UNRESTRICTED","无视限制"],
		["DOTA_ABILITY_BEHAVIOR_IGNORE_PSEUDO_QUEUE","总有效-自动施法"],
		["DOTA_ABILITY_BEHAVIOR_IGNORE_CHANNEL","施法打断有效"],
		["DOTA_ABILITY_BEHAVIOR_DONT_CANCEL_MOVEMENT","不影响移动"],
		["DOTA_ABILITY_BEHAVIOR_DONT_ALERT_TARGET","不惊醒目标"],
		["DOTA_ABILITY_BEHAVIOR_DONT_RESUME_ATTACK","不恢复攻击"],
		["DOTA_ABILITY_BEHAVIOR_NORMAL_WHEN_STOLEN","偷取保持前摇"],
		["DOTA_ABILITY_BEHAVIOR_IGNORE_BACKSWING","无视后摇"],
		["DOTA_ABILITY_BEHAVIOR_RUNE_TARGET","神符目标"],
	];

	Ability.AbilityUnitTargetType = [
		["DOTA_UNIT_TARGET_HERO","英雄", true],
		["DOTA_UNIT_TARGET_BASIC","基本", true],
		["DOTA_UNIT_TARGET_ALL","所有"],
		["DOTA_UNIT_TARGET_BUILDING","建筑"],
		["DOTA_UNIT_TARGET_COURIER","信使"],
		["DOTA_UNIT_TARGET_CREEP","野怪"],
		["DOTA_UNIT_TARGET_CUSTOM","普通"],
		["DOTA_UNIT_TARGET_MECHANICAL","机械"],
		["DOTA_UNIT_TARGET_NONE","无"],
		["DOTA_UNIT_TARGET_OTHER","其他"],
		["DOTA_UNIT_TARGET_TREE","树木"],
	];

	Ability.AbilityUnitTargetTeam = [
		["DOTA_UNIT_TARGET_TEAM_BOTH","双方队伍", true],
		["DOTA_UNIT_TARGET_TEAM_ENEMY","敌方队伍", true],
		["DOTA_UNIT_TARGET_TEAM_FRIENDLY","友方队伍", true],
		["DOTA_UNIT_TARGET_TEAM_CUSTOM","普通队伍"],
		["DOTA_UNIT_TARGET_TEAM_NONE","无"],
	];

	Ability.AbilityUnitTargetFlags = [
		["DOTA_UNIT_TARGET_FLAG_CHECK_DISABLE_HELP","检测玩家'禁用帮助'选项"],
		["DOTA_UNIT_TARGET_FLAG_DEAD","已死亡"],
		["DOTA_UNIT_TARGET_FLAG_FOW_VISIBLE","*暂无说明*"],
		["DOTA_UNIT_TARGET_FLAG_INVULNERABLE","无敌"],
		["DOTA_UNIT_TARGET_FLAG_MAGIC_IMMUNE_ENEMIES","魔法免疫的敌人"],
		["DOTA_UNIT_TARGET_FLAG_MANA_ONLY","*暂无说明*"],
		["DOTA_UNIT_TARGET_FLAG_MELEE_ONLY","*暂无说明*"],
		["DOTA_UNIT_TARGET_FLAG_NO_INVIS","不是隐形的"],
		["DOTA_UNIT_TARGET_FLAG_NONE","无"],
		["DOTA_UNIT_TARGET_FLAG_NOT_ANCIENTS","不是远古"],
		["DOTA_UNIT_TARGET_FLAG_NOT_ATTACK_IMMUNE","不是攻击免疫"],
		["DOTA_UNIT_TARGET_FLAG_NOT_CREEP_HERO","不是野怪"],
		["DOTA_UNIT_TARGET_FLAG_NOT_DOMINATED","不可控制的"],
		["DOTA_UNIT_TARGET_FLAG_NOT_ILLUSIONS","不是幻象"],
		["DOTA_UNIT_TARGET_FLAG_NOT_MAGIC_IMMUNE_ALLIES","不是魔法免疫的盟友"],
		["DOTA_UNIT_TARGET_FLAG_NOT_NIGHTMARED","非被催眠的"],
		["DOTA_UNIT_TARGET_FLAG_NOT_SUMMONED","非召唤的"],
		["DOTA_UNIT_TARGET_FLAG_OUT_OF_WORLD","被放逐出世界的"],
		["DOTA_UNIT_TARGET_FLAG_PLAYER_CONTROLLED","玩家控制的"],
		["DOTA_UNIT_TARGET_FLAG_RANGED_ONLY","范围唯一的"],
	];

	Ability.AbilityUnitDamageType = [
		["-","无",true],
		["DAMAGE_TYPE_MAGICAL","魔法伤害",true],
		["DAMAGE_TYPE_PHYSICAL","物理伤害",true],
		["DAMAGE_TYPE_PURE","纯粹伤害",true],
	];

	Ability.AbilityType = [
		["DOTA_ABILITY_TYPE_BASIC","普通技能",true],
		["DOTA_ABILITY_TYPE_ULTIMATE","终极技能"],
		["DOTA_ABILITY_TYPE_ATTRIBUTES","用于属性奖励"],
		["DOTA_ABILITY_TYPE_HIDDEN","干啥的?"],
	];

	Ability.AbilityCastAnimation = [
		["","默认",true],
		["ACT_DOTA_ATTACK","攻击",true],
		["ACT_DOTA_CAST_ABILITY_1","施法",true],
		["ACT_DOTA_CHANNEL_ABILITY_1","持续施法"],
		["ACT_DOTA_DISABLED","伤残"],
		["ACT_DOTA_RUN","奔跑"],
		["ACT_DOTA_SPAWN","出生"],
		["ACT_DOTA_TELEPORT","传送"],
		["ACT_DOTA_VICTORY","胜利"],
	];

	Ability.AbilitySpecialType = [
		["FIELD_INTEGER", "int", true],
		["FIELD_FLOAT", "float", true],
	];

	return Ability;
});